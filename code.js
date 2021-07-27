var iv={
    x:10,
    y:2,
    z:10
}
var tree={
    "condition": function(){return iv.x>5},
    "id": "1",
    "nodes": [
      {
        "condition": function(){return iv.y>5},
        "id": "2",
        "parentid": "1",
        "nodes": [
          {
            "value": "A",
            "id": "4",
            "parentid": "2"
          },
          {
            "condition": function(){return iv.z<15},
            "id": "5",
            "parentid": "2",
            "nodes": [
              {
                "value": "B",
                "id": "8",
                "parentid": "5"
              },
              {
                "value": "C",
                "id": "9",
                "parentid": "5"
              }
            ]
          }
        ]
      },
      {
        "condition": function(){return iv.z>5},
        "id": "3",
        "parentid": "1",
        "nodes": [
          {
            "value": "D",
            "id": "6",
            "parentid": "3"
          },
          {
            "value": "E",
            "id": "7",
            "parentid": "3"
          }
        ]
      }
    ]
  }

function getOutput(JsonTree){
    if(!JsonTree.value){
        
        if(JsonTree.condition()){
            return getOutput(JsonTree.nodes[0])
        }
        else{
            return getOutput(JsonTree.nodes[1])
        }
    }
    else{
       return JsonTree.value;
    }
}
console.log(getOutput(tree));