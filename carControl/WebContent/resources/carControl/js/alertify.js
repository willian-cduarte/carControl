
/**
 * Dialogs factory 
 *
 * @name      {string}   Dialog name.
 * @Factory   {Function} Dialog factory function.
 * @transient {Boolean}  Indicates whether to create a singleton or transient dialog.
 * @base      {String}   The name of an existing dialog to inherit from.
 *
 * alertify.dialog(name, Factory, transient, base)
 *
 */
 
if(!alertify.myAlert){
  //define a new dialog
  alertify.dialog('myAlert',function factory(){
    return{
      main:function(message){
        this.message = message;
      },
      setup:function(){
          return { 
            buttons:[{text: "cool!", key:27/*Esc*/}],
            focus: { element:0 }
          };
      },
      prepare:function(){
        this.setContent(this.message);
      }
  }});
}
//launch it.
alertify.myAlert("Browser dialogs made easy!");