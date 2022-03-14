var array = [
  {p: "Для внесения вашего сайта в каталог, заполните форму:", name: "form"},
  {label:"Разработчики:",type:"text",name:"author",required:"true",class:"form-control"},
  {label:"Название сайта:",type:"text",name:"title",required:"true",class:"form-control"},
  {label:"URL сайта:",type:"text",name:"site",required:"true",class:"form-control"},
  {label:"Дата запуска сайта:",type:"text",name:"startdate",required:"true",class:"form-control"},
  {label:"Посетителей в сутки:",type:"text",name:"persons",required:"true",class:"form-control"},
  {label:"E-mail для связи:",type:"email",name:"title",required:"true",class:"form-control"},
  {label:"Рубрика каталога:",type:"select",name:"name",options:[{value:"1",text:"здоровье"},{value:"2",text:"уют"}, {value:"3",text:"бытовая техника"}],class:"form-control"},
  {label:"Размещение:",type:"radio",name:"public",options:[{value:"1",text:"бесплатное "},{value:"2",text:"платное"},{value:"3",text:"VIP"}],class:"form-control"},
  {label:"Разрешить отзывы",type:"checkbox",name:"comments",checked:"true",class:"form-control"},
  {label:"Описание сайта:",type:"textarea",name:"article",class:"form-control"},
  {value:"Опубликовать",type:"submit"}
];

function dForm (arr,form) {
  if(arr) {
    arr.forEach(dFormInput);
  }
  function dFormInput(element, index, array) {
    if(element.name=="form") {
      var NewTag=document.createElement('p');
      var NewText=document.createTextNode(element.p);
      NewTag.appendChild(NewText);
      form.appendChild(NewTag);
    }
    if(element.type=="tel" || element.type=="email" ||  element.type=="text"){
      var NewTag=document.createElement('p');
      var NewLabel=document.createElement('label');
      var NewInput=document.createElement('input');
      var NewText=document.createTextNode(element.label);
      NewInput.type=element.type;
      NewInput.name=element.name;
      if(element.required){
        NewInput.required=true;
      }
      NewInput.classList.add(element.class);
      NewLabel.appendChild(NewText);
      NewLabel.appendChild(NewInput);
      NewTag.appendChild(NewLabel);
      form.appendChild(NewTag);
    }
    if(element.type=="submit"){
      var NewTag=document.createElement('p');
      var NewInput=document.createElement('input');
      NewInput.type=element.type;
      NewInput.value=element.value;
      NewInput.classList.add("btn","btn-primary");
      NewTag.appendChild(NewInput);
      form.appendChild(NewTag);
    }
    if(element.type=="select"){
      var NewTag=document.createElement('p');
      var NewLabel=document.createElement('label');
      var NewText=document.createTextNode(element.label);
      var NewSelect=document.createElement('select');
      NewSelect.name=element.name;
      NewSelect.classList.add(element.class);
      NewLabel.appendChild(NewText);
      for(var i=0;i<element.options.length;i++){
        var NewOptionElement=document.createElement('option');
        NewOptionElement.value=element.options[i].value;
        var NewText=document.createTextNode(element.options[i].text);
        NewOptionElement.appendChild(NewText);
        NewSelect.appendChild(NewOptionElement);
      }
      NewLabel.appendChild(NewSelect);
      NewTag.appendChild(NewLabel);
      form.appendChild(NewTag);
    }
    if(element.type=="radio"){
      var NewTag=document.createElement('p');
      var NewLabel=document.createElement('label');
      var NewText=document.createTextNode(element.label);
      NewLabel.appendChild(NewText);
      NewTag.appendChild(NewLabel);
      for( var i=0;i<element.options.length;i++){
        var NewRadio=document.createElement('input');
        NewRadio.value=element.options[i].value;
        NewRadio.type="radio";
        NewRadio.name=element.name;
        var NewLabelR=document.createElement('label');
        var NewText=document.createTextNode(element.options[i].text);
        NewLabelR.appendChild(NewRadio);
        NewLabelR.appendChild(NewText);
        NewTag.appendChild(NewLabelR);
      }
      form.appendChild(NewTag);
    }
    if(element.type=="checkbox"){
      var NewTag=document.createElement('p');
      var NewLabel=document.createElement('label');
      var NewText=document.createTextNode(element.label);
      NewLabel.appendChild(NewText);
      var NewCheck=document.createElement('input');
      NewCheck.type="checkbox";
      NewCheck.name=element.name;
      (element.checked)?NewCheck.checked="true":NewCheck.checked="false";
      NewLabel.appendChild(NewCheck);
      NewTag.appendChild(NewLabel);
      form.appendChild(NewTag);
    }
    if(element.type=="textarea"){
      var NewTag=document.createElement('p');
      var NewLabel=document.createElement('label');
      var NewText=document.createTextNode(element.label);
      NewLabel.appendChild(NewText);
      var NewTextArea=document.createElement('textarea');
      NewTextArea.name=element.name;
      NewTextArea.classList.add(element.class);
      NewLabel.appendChild(NewTextArea);
      NewTag.appendChild(NewLabel);
      form.appendChild(NewTag);
    }
  }
}

dForm(array, form);