webpackJsonp([0],{"7xpJ":function(t,e){},C1aG:function(t,e){},LTmv:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("7+uW"),s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui centered card"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"content"},[o("div",{staticClass:"header"},[t._v(t._s(t.todo.title))]),t._v(" "),o("div",{staticClass:"meta"},[t._v(t._s(t.todo.project))]),t._v(" "),o("div",{staticClass:"extra content"},[o("span",{staticClass:"right floated edit icon",on:{click:t.showForm}},[o("i",{staticClass:"edit icon"})]),t._v(" "),o("span",{staticClass:"right floated trash icon",on:{click:function(e){t.deleteTodo(t.todo)}}},[o("i",{staticClass:"trash icon"})])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"content"},[o("div",{staticClass:"ui form"},[o("div",{staticClass:"field"},[o("label",[t._v("Title")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],attrs:{type:"text"},domProps:{value:t.todo.title},on:{input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"field"},[o("label",[t._v("Project")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.project,expression:"todo.project"}],attrs:{type:"text"},domProps:{value:t.todo.project},on:{input:function(e){e.target.composing||t.$set(t.todo,"project",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"ui two button attached buttons"},[o("button",{staticClass:"ui basic blue button",on:{click:t.hideForm}},[t._v("Save")])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing&&t.todo.done,expression:"!isEditing && todo.done"}],staticClass:"ui bottom attached green basic button",attrs:{disabled:""}},[t._v("Completed")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing&&!t.todo.done,expression:"!isEditing && !todo.done"}],staticClass:"ui bottom attached red basic button",on:{click:function(e){t.completeTodo(t.todo)}}},[t._v("Pending")])])},staticRenderFns:[]},n={props:["todos"],components:{Todo:o("VU/8")({props:["todo"],data:function(){return{isEditing:!1}},methods:{showForm:function(){this.isEditing=!0},hideForm:function(){this.isEditing=!1},deleteTodo:function(t){this.$emit("delete-todo",t)},completeTodo:function(t){this.$emit("complete-todo",t)}}},s,!1,null,null,null).exports},methods:{deleteTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1)},completeTodo:function(t){var e=this.todos.indexOf(t);this.todos[e].done=!0}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"ui block header"},[t._v("Task Rabbit")]),t._v(" "),o("div",{staticClass:"ui large horizontal divided list"},[o("p",{staticClass:"item"},[t._v("Total tasks: "+t._s(t.todos.length))]),t._v(" "),o("p",{staticClass:"item"},[t._v("Completed: "+t._s(t.todos.filter(function(t){return!0===t.done}).length))]),t._v(" "),o("p",{staticClass:"item"},[t._v("Pending: "+t._s(t.todos.filter(function(t){return!1===t.done}).length))])]),t._v(" "),o("div",{staticClass:"ui three cards"},t._l(t.todos,function(e){return o("todo",{key:e.id,attrs:{todo:e},on:{"delete-todo":t.deleteTodo,"complete-todo":t.completeTodo}})}),1)])},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui basic content center aligned segement"},[o("div",{staticClass:"ui centered card"},[t._m(0),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"ui top attached basic button icon",on:{click:t.openForm}},[o("i",{staticClass:"plus icon"})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}],staticClass:"ui centered card"},[o("div",{staticClass:"content"},[o("div",{staticClass:"ui form"},[o("div",{staticClass:"field"},[o("label",[t._v("Title")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],ref:"title",attrs:{type:"text",defaultValue:""},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"field"},[o("label",[t._v("Project")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.projectText,expression:"projectText"}],ref:"project",attrs:{type:"text",defaultValue:""},domProps:{value:t.projectText},on:{input:function(e){e.target.composing||(t.projectText=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"ui two buton attached buttons"},[o("button",{staticClass:"ui basic blue button",on:{click:function(e){t.sendForm()}}},[t._v("Create")]),t._v(" "),o("button",{staticClass:"ui basic red button",on:{click:t.closeForm}},[t._v("Cancel")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[this._v("Add an Item")])])}]};var c={name:"app",components:{TodoList:o("VU/8")(n,a,!1,function(t){o("LTmv")},null,null).exports,CreateTodo:o("VU/8")({data:function(){return{titleText:"",projectText:"",isCreating:!1}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},sendForm:function(){if(this.titleText.length>0&&this.projectText.length>0){var t=this.titleText,e=this.projectText;this.$emit("create-todo",t,e),this.titleText="",this.projectText=""}this.isCreating=!1}}},d,!1,function(t){o("C1aG")},null,null).exports},methods:{addTodo:function(t,e){this.todos.push({id:this.todos.length+1,title:t,project:e,done:!1}),console.log(this.todos)}},data:function(){return{todos:[{id:1,title:"Homework 1",project:"Project A",done:!1},{id:2,title:"Homework 2",project:"Project B",done:!0},{id:3,title:"Homework 3",project:"Project C",done:!1},{id:4,title:"Homework 4",project:"Project D",done:!1}]}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("todo-list",{attrs:{todos:this.todos}}),this._v(" "),e("create-todo",{on:{"create-todo":this.addTodo}})],1)},staticRenderFns:[]};var l=o("VU/8")(c,r,!1,function(t){o("7xpJ")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.4bbf10ca44bc216aa982.js.map