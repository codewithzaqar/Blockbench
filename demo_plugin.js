var plugin_data = {
    id: 'my_plugin_id',
    title: 'My Plugin',
    icon: 'style', //Material icon name
    author: 'MyName',
    description: 'My Descriotion',
    version: '1.0.0', //Plugin versionn
    variant: 'both' // 'both', 'web', 'desktop'
}

//Adds an entry to the plugin menu
Blockbench.addMenuEntry('Label', 'icon', function(){
    Blockbench.showMessage('Hello World', 'center')
})

//Called when the user uninstalls the plugin
onUnistall = function() {
    //Removes the menu entry
    Blockbench.removeMenuEntry('Label')
}