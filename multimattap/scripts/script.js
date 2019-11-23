const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patch = require('Patches');
const Material = require('Materials');
const Touch = require('TouchGestures');
var matname = Patch.getStringValue("matname");
var objname = Patch.getStringValue("objname");
var totmat = Patch.getScalarValue("totmat");

var i = 1;
Touch.onTap().subscribe(()=>{
i++;
if(i==(totmat.pinLastValue()+1))
{
i=1;
}
var mat = matname.pinLastValue()+''+i.toString();
Diagnostics.log(mat);
Scene.root.find(objname.pinLastValue()).material = Material.get(mat);
});