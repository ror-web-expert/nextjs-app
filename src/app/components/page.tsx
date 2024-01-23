import Link from "next/link";

export default function Page(){
return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1> Compnent page</h1>
    <Link href="/compnents/links"> Links</Link>
   </main>
)
}