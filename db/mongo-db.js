var mongoConnection = (function(){
    var dbConneObj = '';
    return{
        setDBConnection:function(mongoose,url){
            let mongoDB = process.env.MONGODB_URI || url;
            mongoose.connect(mongoDB);
            mongoose.Promise = global.Promise;
            dbConneObj = mongoose.connection;
            dbConneObj.on('error', console.error.bind(console, 'MongoDB connection error:'));    
            return dbConneObj;        
        },
        getDBConnection:function(){
            return dbConneObj;
        }
    }
})();

module.exports = mongoConnection;