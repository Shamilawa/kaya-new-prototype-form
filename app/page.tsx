import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import EnterpriseBody from "@/components/EnterpriseBody";

export default function Home() {
    return (
        <div className="flex w-full h-full">
            <Sidebar />
            <main className="flex-1 flex flex-col py-6">
                <Header />
                <section className="flex-1 bg-white border border-[#D9D9E0] border-t-0 rounded-bl-xl rounded-br-xl p-5 overflow-y-auto shadow-[0_10px_30px_rgba(163,167,174,0.15)]">
                    <EnterpriseBody />
                </section>
            </main>
        </div>
    );
}
