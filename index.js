const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/HOSTEL_MANAGEMENT")
  .then(() => console.log("Compiled Successfully ---------"))
  .catch((err) => console.log(err));
// Collection1
const StudentSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: false,
  },
  AdmissionDate: {
    type: Date,
    default: Date.now,
  },
  PaymentStatus: {
    type: String,
    required: true,
  },
});
const StudentCollection = new  mongoose.model("Student", StudentSchema);

 const  Studentdetails= new StudentCollection({
    Name:"Faizan Ali",
    age:14,
    contact:+923245435540,
    PaymentStatus:"Paid"
})

Studentdetails.save();


//Collection2
 const RoomSchema=mongoose.Schema({

 RoomNumber:{
    type:Number,
    require:true
 },
 types:{
    type:String,
    require:true
 },
 Capcity:{
   type:Number,
   require:false
 },
 Pricepermonth:{
    type:Number,
    require:true

 }
})
const RoomCollection=new mongoose.model("RoomsCollection",RoomSchema);

const RoomCollection2=new  RoomCollection({
   RoomNumber:4,
   types:"Single",
   Capcity:2,
   Pricepermonth:7000,
})
RoomCollection2.save();

//Collection3
const PaymentCollection=mongoose.Schema({

    Amount:{
       type:Number,
       require:true
    },
    PaymentDate:{
       type:Date,
       default:Date.now
    },
    PaymentMethod:{
      type:String,
      require:false
    },
    Status:{
       type:String,
       require:true
   
    }
   })
   const PaymentColection2=new mongoose.model("paymentCollection",PaymentCollection);
   
   const PaymentColection3=new  PaymentColection2({
      Amount:4000,
      PaymentMethod:"Card",
      Status:"Suceessfully"
   })
   PaymentColection3.save();



//Collection4
const StaffCollection=mongoose.Schema({

    Name:{
       type:String,
       require:true
    },
    role:{
       type:String,
       require:true
  
    },
    ContactNumber:{
      type:Number,
      require:false
    },
    Shift:{
       type:String,
       require:true
   
    }
   })
   const StaffColection2=new mongoose.model("StaffCollection",StaffCollection);
   
   const StaffColection3=new  StaffColection2({
      Name:"John",
      role:"Cleaner",
      Shift:"ChidSector"
   })
   StaffColection3.save();

//Collection5

const RoomAssignmentSchema=mongoose.Schema({

   assigndate:{
    type:Date,
    default: Date.now
   },
   enddate:{
    type:String,
    require:true
   }
})
const Roomassignment2= new mongoose.model("Room Assignment",RoomAssignmentSchema);
const RoomAssignment3=new Roomassignment2({
    enddate:"12 Dec 2024"
})
RoomAssignment3.save();
//Collection 6

const ComplaintsSchema = mongoose.Schema({
    complaint_text: {
      type: String,
      required: true, 
    },
    complaint_date: {
      type: Date,
      required: true,
      default: Date.now, 
    },
    status: {
      type: String,
      required: true, 
      
    },
  });
  
  const ComplaintsCollection = new mongoose.model("ComplaintsCollection",  ComplaintsSchema);
  
  const Complaint = new ComplaintsCollection({
    complaint_text: "Leaking water pipe in Room 101", 
    complaint_date: new Date("2024-01-05"), 
    status: "open"
  });
  
  
  Complaint.save()
 //Collection 7

const VisitorsCollection=mongoose.Schema({
    VistorsName:{
        type:String,
        require:true,
    },
    Visitdate:{
      type:Date,
      default: Date.now
    },
    Relation_to_Students:{
        type:String,
        require:true,
    }
})
const VistCollection2=new mongoose.model("Vistor_Collection",VisitorsCollection);
const VisitCollection3=new VistCollection2({
    VistorsName:"Shabbir Hussain",
    Relation_to_Students:"Father",
})
VisitCollection3.save();


//Collection8
const InventorySchema = mongoose.Schema({
    item_name: {
      type: String,
      required: true, 
    },
    quantity: {
      type: Number,
      required: true, 
      min: 0, 
    },
    status: {
      type: String,
      required: true,
      
  
    },
    last_updated: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });
  
  
  const InventoryCollection =new mongoose.model(
    "InventoryCollection",
    InventorySchema
  );
  
  
  const InventoryItem = new InventoryCollection({
    item_name: "Bedsheet", 
    quantity: 50, 
    status: "available", 
  });
  
  InventoryItem.save()
  