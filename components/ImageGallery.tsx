"use client";

import Image from "next/image";

interface ImageGalleryProps {
    albumPath: string;
    imageCount: number;
    extension?: string;
    className?: string;
}

export default function ImageGallery({
    albumPath,
    imageCount,
    extension = "jpg",
    className = "",
}: ImageGalleryProps) {
    const images = Array.from(
        { length: imageCount },
        (_, i) => `${albumPath}/${i + 1}.${extension}`,
    );

    return (
        <div
            className={`absolute left-1/2 w-[90vw] max-w-[90vw] -translate-x-1/2 ${className}`.trim()}
        >
            <div
                className={
                    "max-w-full [column-gap:2rem] [column-count:2] sm:[column-count:2] md:[column-count:3] lg:[column-count:4]"
                }
            >
                {images.map((src) => (
                    <div
                        key={src}
                        className={
                            "mb-8 w-full break-inside-avoid overflow-hidden rounded-xl shadow-lg"
                        }
                    >
                        <Image
                            src={src}
                            alt={""}
                            width={900}
                            height={1200}
                            className={"block h-auto w-full max-w-full min-w-[160px] object-cover"}
                            loading={"lazy"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
