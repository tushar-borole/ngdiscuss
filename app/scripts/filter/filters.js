/*Author: Tushar Borole
Discription:Custom filters are written here
Copyright:Karma Worldwide Inc 2014*/

/*eg arrayOfObjectswithKeys | filterMultiple:{key1:['value1','value2','value3',...etc],key2:'value4',key3:[value5,value6,...etc]}*/
app.filter('split', ['$filter', function ($filter) {
    return function (items, split) {
        var array=[];
        if(angular.isDefined(items)){
        array = items.split(split);
        }
        return array;
    }
}]);