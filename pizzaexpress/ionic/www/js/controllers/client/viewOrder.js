angular.module('starter.controllers')
    .controller('ClientViewOrderCtrl', [
        '$scope', '$stateParams', 'Order', '$ionicLoading',
        function($scope, $stateParams, Order, $ionicLoading){

            $scope.order = {};
            $ionicLoading.show({
                template: 'Carregando...'
            });

            Order.get({id: $stateParams.id, include: "items,cupom"}, function(data){
                $scope.order = data.data;
                console.log(data.data);
                $ionicLoading.hide();
            }, function(dataError){
                $ionicLoading.hide();
                alert('Conexão Falhou');
            });
        }]);