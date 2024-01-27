'use client';

import { Post } from "@/typings/posts";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";

export function BlogCard({ post }: { post: Post }) {
    return (
        <Card color="gray" className="w-full md:w-80 overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <Image
                    width={500} height={500} className="w-full"
                    src={post.imgUrl}
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="white">
                    {post.title}
                </Typography>
                <Typography className="mt-3 font-normal text-gray-400 text-sm">
                    {post.desc}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                    <Tooltip content={post.username}>
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt={post.username}
                            src={post.userImg}
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                </div>
                <Typography className="font-normal">{new Date(post.createdAt).toDateString()}</Typography>
            </CardFooter>
        </Card>
    );
}