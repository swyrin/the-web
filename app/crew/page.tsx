"use client";

import type { CrewMember } from "@/lib/vns";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import MemberBox from "@/components/MemberBox";
import PageTitle from "@/components/PageTitle";
import CrewMembers from "@/public/crew/_crew.json";

type HRListProps = {
    members: CrewMember[];
};

function CrewList(props: HRListProps) {
    const eliteMembers = props.members.slice(0, 3);
    const remainingMembers = props.members.slice(3);

    return (
        <>
            {/* The reason for the horrible code is that the CEO want to have 4-5-5 layout. */}
            {/* But it looks utterly dogshit on mobile, so falling back to the default one on that. */}
            <div className={"hidden place-content-center-safe lg:block"}>
                <div
                    className={"mx-36 mb-4 flex flex-col flex-wrap place-content-evenly md:flex-row"}
                >
                    {eliteMembers.map((member) => {
                        return (
                            <MemberBox
                                key={member.name}
                                name={member.name}
                                role={member.role}
                                quote={member.quote}
                            />
                        );
                    })}
                </div>
                <div
                    className={"grid place-content-center-safe sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5"}
                >
                    {remainingMembers.map((member) => {
                        return (
                            <div key={member.name} className={"w-full md:w-auto"}>
                                <MemberBox
                                    name={member.name}
                                    role={member.role}
                                    quote={member.quote}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* The other-than-hell layout. */}
            <div
                className={"grid place-content-center-safe sm:grid-cols-1 md:grid-cols-3 lg:hidden lg:grid-cols-5"}
            >
                {props.members.map((member) => {
                    return (
                        <div key={member.name} className={"w-full md:w-auto"}>
                            <MemberBox name={member.name} role={member.role} quote={member.quote} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

function PartnerList(props: HRListProps) {
    return (
        <>
            <div
                className={"grid place-content-center-safe sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5"}
            >
                {props.members.map((member) => {
                    return (
                        <MemberBox
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            quote={member.quote}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default function CrewPage() {
    const [crewTab, setCrewTab] = useState<string>("dreamchasers");

    useEffect(() => {
        const stored = localStorage.getItem("crew-tab");
        if (stored && stored !== "") {
            setCrewTab(stored);
        }
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        startIndex: 0,
    });

    useEffect(() => {
        localStorage.setItem("crew-tab", crewTab);

        if (emblaApi) {
            const targetIndex = crewTab === "dreamchasers" ? 0 : 1;
            emblaApi.scrollTo(targetIndex);
        }
    }, [crewTab, emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi)
            return;
        const selectedIndex = emblaApi.selectedScrollSnap();
        setCrewTab(selectedIndex === 0 ? "dreamchasers" : "partners");
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi)
            return;
        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi)
                emblaApi.scrollTo(index);
        },
        [emblaApi],
    );

    const members = CrewMembers.members;
    const partners = CrewMembers.partners;

    return (
        <div className={"h-visible vns-background flex flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle
                        title={"Tổ chức"}
                        favorText={"Những người đã góp hết sức mình để mang đến cho các bạn những cái event cực cháy."}
                        dark
                    />
                </div>
            </div>
            {/* Desktop tabs - original design */}
            <div
                className={"tabs tabs-border sticky top-[70px] z-0 hidden h-[calc(100vh-70px)] place-content-center-safe overflow-hidden rounded-none md:flex"}
                data-theme={"dark"}
            >
                <input
                    type={"radio"}
                    name={"my_tabs_6"}
                    className={"tab sm:text-md text-base-content w-1/2 md:text-lg lg:text-2xl"}
                    aria-label={"Dreamchasers"}
                    checked={crewTab === "dreamchasers"}
                    onChange={() => setCrewTab("dreamchasers")}
                />
                <div className={"tab-content overflow-y-auto border-t-gray-400 py-10"}>
                    <CrewList members={members} />
                </div>
                <input
                    type={"radio"}
                    name={"my_tabs_6"}
                    className={"tab sm:text-md text-base-content w-1/2 md:text-lg lg:text-2xl"}
                    aria-label={"Hợp tác phát triển"}
                    checked={crewTab === "partners"}
                    onChange={() => setCrewTab("partners")}
                />
                <div className={"tab-content overflow-y-auto border-t-gray-400 py-10"}>
                    <PartnerList members={partners} />
                </div>
            </div>

            {/* Mobile swipable tabs */}
            <div
                className={"swipe-tabs sticky top-[70px] z-0 h-[calc(100vh-70px)] md:hidden"}
                data-theme={"dark"}
            >
                {/* Tab indicators */}
                <div className={"flex w-full border-b border-gray-400"}>
                    <button
                        type={"button"}
                        className={`text-base-content flex-1 py-3 text-center transition-colors ${
                            crewTab === "dreamchasers"
                                ? "border-b-2 border-white text-white"
                                : "text-gray-400"
                        }`}
                        onClick={() => scrollTo(0)}
                    >
                        Dreamchasers
                    </button>
                    <button
                        type={"button"}
                        className={`text-base-content flex-1 py-3 text-center transition-colors ${
                            crewTab === "partners"
                                ? "border-b-2 border-white text-white"
                                : "text-gray-400"
                        }`}
                        onClick={() => scrollTo(1)}
                    >
                        Hợp tác phát triển
                    </button>
                </div>

                {/* Swipable content */}
                <div className={"embla h-[calc(100%-48px)] overflow-hidden"} ref={emblaRef}>
                    <div className={"embla__container flex h-full"}>
                        <div className={"embla__slide flex-[0_0_100%] overflow-y-auto py-10"}>
                            <CrewList members={members} />
                        </div>
                        <div className={"embla__slide flex-[0_0_100%] overflow-y-auto py-10"}>
                            <PartnerList members={partners} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
