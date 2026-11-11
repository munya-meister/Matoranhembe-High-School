require('dotenv').config();
const fs=require('node:fs');const {Pool}=require('pg');
const schema='matoranhembe_school';
if(!process.env.DATABASE_URL)throw Error('DATABASE_URL required; configure the existing Render Postgres connection privately.');
const pool=new Pool({connectionString:process.env.DATABASE_URL,ssl:process.env.DATABASE_SSL==='true'?{rejectUnauthorized:true}:undefined});
(async()=>{const client=await pool.connect();try{
await client.query('BEGIN');
await client.query('CREATE SCHEMA IF NOT EXISTS '+schema);
await client.query('SET LOCAL search_path TO '+schema+',pg_catalog');
await client.query(fs.readFileSync('db/schema.sql','utf8'));
await client.query('COMMIT');
console.log('Isolated schema '+schema+' initialized. Other application schemas were not modified.');
}catch(e){await client.query('ROLLBACK');throw e}finally{client.release();await pool.end()}})().catch(e=>{console.error(e.message);process.exitCode=1});
