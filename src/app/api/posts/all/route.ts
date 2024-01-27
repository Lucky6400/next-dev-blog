import { connect } from "@/dbConfig/db";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try {
       const posts = await Post.find();

        return NextResponse.json({
            message: "Success",
            success: true,
            posts: posts
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}