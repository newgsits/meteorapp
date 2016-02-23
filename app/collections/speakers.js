Speakers=new Meteor.Collection('speakers',{});
Speakers.attachSchema(new SimpleSchema({
	name:{
		type:String,label:"Name",max:200},
	
	address:{
		type:String,label:"Address",max:200},
}));
