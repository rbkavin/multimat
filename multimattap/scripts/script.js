const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patch = require('Patches');
const Material = require('Materials');
const Touch = require('TouchGestures');

(async () => {

    const [totMAt, objectName, matName] = await Promise.all([
        Patch.outputs.getScalar("totmat"),
        Patch.outputs.getString("objname"),
        Patch.outputs.getString("matname"),


    ])
    const [object] = await Promise.all([
        Scene.root.findFirst(objectName.pinLastValue())
    ])
    let mat = [];

    for (let i = 0; i <= totMAt.pinLastValue(); i++) {
        mat.push(Material.findFirst(matName.pinLastValue() + i))
    }
    const materials = await Promise.all(mat);


    var i = 0;
    Touch.onTap().subscribe(() => {
        i++;
        if (i == (totMAt.pinLastValue())) {
            i = 0;
        }
        object.material = materials[i];
    });

})()