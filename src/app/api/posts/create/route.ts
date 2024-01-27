import { connect } from "@/dbConfig/db";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, title, imgUrl, desc, tags, username, userImg } = reqBody;

        const post = new Post({
            userId, title, imgUrl, desc, tags, username, userImg
        });

        const savedPost = await post.save();

        return NextResponse.json({
            message: "Success",
            success: true,
            post: savedPost
        }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}