import { NextResponse,NextRequest } from "next/server"
import { connection } from "../../config/dbConfig";


export const GET =async (req,res)=>{
    const {params}=req;
    console.log(params)
    const conn = await connection.getConnection();
   const queryMs=`select * from users`;
   const result= await conn.query(queryMs);
   console.log("datat",result[0])
   conn.release()
    return NextResponse.json({message:"hello",date:result[0]})
}


export const GetUser =async (req,res)=>{
    const conn = await connection.getConnection();
   const query=`select * from users`;
   const result= await conn.query(query);
   console.log("datat",result[0])
   conn.release()
    return NextResponse.json({message:"hello",date:result[0]})
}