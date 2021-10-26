import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://pedrotti:pedrotti77@cluster0.71hvb.mongodb.net/teste?retryWrites=true&w=majority', {
    useNewUrlParser: true,
       useUnifiedTopology: true,
}).then(() => console.log("connected to DB."))
.catch(err => console.log(err));

mongoose.Promise = global.Promise;

export default mongoose;