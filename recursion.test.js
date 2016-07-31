var a = [
    {
        name: 'one',
        children: []
    },
    {
        name: 'two',
        children: [
            {
                name: 'A',
                children: []
            },
            {
                name: 'B',
                children: []
            },
            {
                name: 'C',
                children: [
                    {
                        name: 'nest',
                        children: []
                    }
                ]
            }
        ]
    }
]

function getName(array, name, store, parent) {
    
    array.forEach(function(item, index, el) {
        store.push({p:parent,el:item, i:index})
        if(item.name == name) {         
            return item
        } else {
            return getName(item.children, name, store, item.name)   
        }
    })
    return store
}

console.log(getName(a, 'nest', [], null));
var getSubMenuItem = function (subMenuItems, id) {
    
        for (var i = 0; i < subMenuItems.length; i++) {
            if (subMenuItems[i].name == id) {
                return subMenuItems[i];
            }
            var found = getSubMenuItem(subMenuItems[i].children, id);
            if (found) return found;
        }
    
};
var t=getSubMenuItem(a, 'B');
console.log(t);