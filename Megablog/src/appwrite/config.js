import conf from "../conf/conf";
import { Client, ID, Storage, Databases, Query  } from "appwrite";

export class Service{
    client = new Client();

    databases;
    bucket;
    constructor(){
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);
          this.bucket = new Storage(this.client);
          this.databases = new Databases(this.client);
    }

async createPost({ title, slug, content, featuredimage, status, userid }) {
  try {
    // agar file aayi hai to pehle upload karo
    let uploadedFile = null;
    if (featuredimage) {
      uploadedFile = await this.uploadFile(featuredimage);
    }

    return await this.databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredimage: uploadedFile ? uploadedFile.$id : null, // yaha sahi id save hogi
        status,
        userid,
      }
    );
  } catch (error) {
    throw error;
  }
}


async updatePost(slug, { title, content, featuredimage, status }) {
  try {
    let uploadedFile = null;

    // agar naya file mila to upload karo
    if (featuredimage && featuredimage instanceof File) {
      uploadedFile = await this.uploadFile(featuredimage);
    }

    return await this.databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,
        content,
        // agar naya file mila to uska id save karo, warna purana hi rehne do
        featuredimage: uploadedFile ? uploadedFile.$id : featuredimage,
        status,
      }
    );
  } catch (error) {
    throw error;
  }
}


    async deletePost(slug){
        try {
             await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug )
            return true
        } catch (error) {
            throw error;
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            throw error;
            return false
        }
    }

    async getposts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId
                , conf.appwriteCollectionId, queries 
                
            )

        } catch (error) {
            throw error;
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file  )
            
        } catch (error) {
         throw error;
       
            
        }
    }

    async deleteFile(fileid){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileid)
            return true
        } catch (error) {
            throw error;
            
        }
    }

getFileView(fileid) {
  return this.bucket.getFileView(conf.appwriteBucketId, fileid);
}




}

const service = new Service()
export default service;