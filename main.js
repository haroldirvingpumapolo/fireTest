const rpeat= document.getElementById("repetId")
const repeatInfo=document.getElementById("infoId")
const proyectArray =[
  {title:"harold", value:"bonus street",option:"read more"},
  {title:"paolo", value:"bonus street",option:"lead sponsor"},

]
const generalInfo=[
  {name:"Project name", value:"Value"},
  {name:"Project type", value:"Grid"},
  {name:"Industry", value:"Legal Education"},
  {name:"Borrower", value:"Value"},
  {name:"Target", value:"Value"},
  {name:"Signing date", value:"30.04.2021"},
]
proyectArray.map(v=>rpeat.innerHTML+=`<div style="width:630px;height:48px;border-radius: 5px;border: 1px solid black;flex-wrap: wrap;display: flex;flex-direction: row;justify-content: space-between;margin-bottom: 36px;align-items: center;padding-left:10px;padding-right:20px;">

<div style="color: #9090A6;">${v.title}</div>
<div style="color: #44444F;padding-right:400px;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;font-style: normal;font-weight: 400;font-size: 14px;line-height: 21px;">${v.value}</div>
<div style="color: #9090A6;">${v.option}</div>
</div>`)
generalInfo.map(v=>repeatInfo.innerHTML+=`<div style="">
<div style="color: #B5B5BE;">${v.name}</div>
<div style="color: #44444F; ">${v.value}</div>
</div>`)

