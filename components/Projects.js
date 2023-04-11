import Image from "next/image";
import foodJournal from "@/public/foodJournal.png";
import spaceExplore from "@/public/spaceExplore.png";
import naughtsCrosses from "@/public/naughtsCrosses.png";

export default function Projects() {
    return (
        <section>
            <div className="my-10 text-left">
                <h1 className="text-4xl my-4">Projects</h1>
                <p>I've worked on a variety of projects both individually and in collaboration with developers and UX designers.</p>
            </div>

            <div className="flex justify-center flex-col gap-10 md:flex-row">
                <div className="text-center shadow-lg p-5 rounded-xl my-5">
                    <h2 className="text-xl my-2">The Food Journal</h2>
                    <div>
                        <Image src={foodJournal} alt="" className="w-full rounded-xl" />
                    </div>
                    <p>Ruby on rails full-stack application, with postgresQL database</p>
                </div>

                <div className="text-center shadow-lg p-5 rounded-xl my-5">
                    <h2 className="text-xl my-2">Survival Space Exploration</h2>
                    <div>
                        <Image src={spaceExplore} alt="" className="w-full rounded-xl" />
                    </div>
                    <p>CRUD game made with Ruby on rails, with postgresQL database</p>
                </div>

                <div className="text-center shadow-lg p-5 rounded-xl my-5">
                    <h2 className="text-xl my-2">Naughts and Crosses</h2>
                    <div>
                        <Image src={naughtsCrosses} alt="" className="w-full rounded-xl" />
                    </div>
                    <p>Static HTML and CSS</p>
                </div>
            </div>
        </section>
    );
}
