// import mongoose from "mongoose";

//  function connect() {
//   const username = process.env.MONGO_DB_USERNAME;
//   const passport = process.env.MONGO_DB_PASSWORD;
//   const url = process.env.MONGO_DB_URL;

//   mongoose.connect("mongodb+srv://expense_tracker_latest:expense_tracker_latest@cluster0.3ftnptc.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
//   .then(()=>console.log("Mongodb connected"))
//   .catch((err)=> console.log("Error"+err))  
// }

// export default connect;
// mongodb+srv://expense_tracker_latest:<password>@cluster0.3ftnptc.mongodb.net/?retryWrites=true&w=majority






import mongoose from "mongoose";

async function connect() {
  const username = process.env.MONGO_DB_USERNAME;
  const passport = process.env.MONGO_DB_PASSWORD;
  const url = process.env.MONGO_DB_URL;

  await mongoose.connect(
    `mongodb+srv://${username}:${passport}@${url}/?retryWrites=true&w=majority`
  );
  console.log("MongoDB connection is successful");
}

export default connect;