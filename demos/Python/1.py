
.controller('WorkCommentCtrl', ['$scope', '$state', '$window', 'Comment', 'Work', 'Loginer', '$check', '$toast', 'keyboard', '$timeout', '$ionicScrollDelegate', '$ionicPopup', '$file', function($scope, $state, $window, Comment, Work, Loginer, $check, $toast, keyboard, $timeout, $ionicScrollDelegate, $ionicPopup, $file) {
	const {id} = $state.params;
	let info = getParamsFromUrl('_info');
	info = JSON.parse(decodeURI(info));
	
	const comment = (()=>{
		var loading = 0;
		return {
			replyInfo: '',
			list(){
				Work.reports(id).then( data => {
					$scope.reports = data.reports;
				})
			},
			//
			create(){
				const c = $scope.data.content;
				const {index, targetId} = this.replyInfo;
				const params = {content: c}
				if(this.replyInfo){
					const {targetType} = $scope.reports[index]
					params.targetId = targetId;
					//回复汇报2; 回复评论3
					params.targetType = targetType==0 ? '2' : '3'
				}else{
					//普通评论
					params.targetId = id;
					params.targetType = '1'
				}

				//check
				if($check.isEmpty(c)){
					return;
				}
				if( $check.isSpecial(c) ){
					$toast.alert(`评论中不能包含特殊字符 ${$check.getSpecialZZ()}`);
					return;
				}else if( $check.maxLength(c, $check.getLength('COMMENT')) ){
					$toast.alert(`评论不能超过${$check.getLength('COMMENT')/2}个字`);
					return !1
				}else if($check.isHasEmoji(c)){
					$toast.alert('评论中不能包含表情符号');
					return !1;
				}
				
				
				if(loading) return;
				loading = 1;
				
				
				//go
				Comment.create(params).then( data => {
					const {id, userInfo, userInfo: {userId, userName, deptId, deptName, face}} = data;
					Loginer.set(Object.assign(Loginer.get(), userInfo))
					
					const nCmt = {
						id,
						targetId: params.targetId,
						content: params.content,
						createTime: +new Date(),
						orgId: deptId,
						orgName: deptName,
						userId, 
						userName,
						face,
						targetType: '1'
					}
					if(params.targetType==='1'){
						$scope.reports.push(nCmt)
						$scope.info.commentCount = $scope.info.commentCount ? ++$scope.info.commentCount : 1;
					}else{
						if(!$scope.reports[index].replies) $scope.reports[index].replies = []
						$scope.reports[index].replies.push(nCmt)
					}

					$scope.data.content = '';
					comment.replyInfo = ''
				}).finally(()=>{
					loading = 0;
				})
			},
			//回复
			replay(index){
				const o = $scope.reports[index];
				const {targetId, userName, orgName} = o;
				this.replyInfo = targetId !== this.replyInfo.targetId
				? {
					targetId,
					userName,
					orgName,
					index
				} : '';
				
				keyboard.show()
				$timeout(()=>{
					$('#cmtInput').focus()
					$ionicScrollDelegate.resize()
				}, 0)
			},
			remove(index, pindex){
				const o = pindex===undefined ? $scope.reports[index] : $scope.reports[pindex].replies[index]
				$ionicPopup.confirm({
					title: '真的要删除？',
					cancelText: '取消',
					okText: '确定'
				}).then( res => {
					if(res){
						Comment.remove(o.id).then(data=>{
							$toast.succ('已删除')
							if(pindex===undefined)
								$scope.reports.splice(index, 1)
							else
								$scope.reports[pindex].replies.splice(index, 1)
						})
					}
				})
			},
			isMine(userId){
				return Loginer.get().userId===userId;
			}
		}
	})();
	const page = (()=>{
		return {
			back(){
				$window.history.go(-1)
			},
			//动态评论包含框placeholder
			_placeholder4cmt(){
				const {targetId, userName, orgName} = $scope.comment.replyInfo;
				
				return targetId ? `回复: ${userName}` : '请输入评论内容'
			},
			//查看文件
			file(data){
				$File.view(data)
			},
			init(){
				comment.list();
			}
		}
	})();
	
	$scope.data = {
		content: ''
	}
	$scope.page = page;
	$scope.info = info;
	$scope.comment = comment;
	
	page.init();
}])