import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Clock,
  Award,
  BookOpen,
  Users,
  Star,
  FileText,
  MessageSquare,
  UserCheck,
  AlertTriangle,
  Briefcase,
  Instagram,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import HeroAnimation from "@/components/hero-animation"
import FeaturesAnimation from "@/components/features-animation"
import TestimonialSlider from "@/components/testimonial-slider"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            {/* Logo placeholder - will be replaced with actual logo */}
            <div className="relative h-10 w-40 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                <span className="font-bold">CARE IAS</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium transition-colors hover:text-foreground">
              About
            </a>
            <a href="#features" className="text-sm font-medium transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#comparison" className="text-sm font-medium transition-colors hover:text-foreground">
              Why Aligarh?
            </a>
            <a href="#faculty" className="text-sm font-medium transition-colors hover:text-foreground">
              Faculty
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-foreground">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Delhi-Level IAS Coaching in Aligarh
                  </h1>
                  <p className="text-lg italic">Where private coaching meets personalized tuition</p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Expert guidance from experienced Delhi faculty, right here in Aligarh. Your path to UPSC, UPPSC,
                    BPSC, and APSC success starts at Care IAS.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#contact">
                    <Button className="px-8 transition-all duration-300 hover:scale-105">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#about">
                    <Button variant="outline" className="px-8 transition-all duration-300">
                      Learn More
                    </Button>
                  </a>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <Badge variant="outline" className="text-sm font-semibold border-2 px-3 py-1 w-fit">
                    SPECIAL OFFER: 20% OFF for first 20 admissions!
                  </Badge>
                  <Badge variant="outline" className="text-sm font-semibold border-2 px-3 py-1 w-fit">
                    Batches Begin From 10<sup>th</sup> June 2025
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>UPSC</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>UPPSC</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>BPSC</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>APSC</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <HeroAnimation />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Care IAS?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Care IAS is dedicated to helping students prepare for Civil Services Examinations (UPSC, UPPSC, BPSC,
                  APSC). We bring Delhi-level coaching expertise directly to Aligarh, offering a unique opportunity for
                  local students to access top-tier guidance without relocating.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Care IAS Campus"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Delhi-Level Expertise in Aligarh</h3>
                      <p className="text-muted-foreground">
                        Our faculty from Delhi brings years of experience and proven methodologies to help you crack the
                        civil services examinations.
                      </p>
                    </div>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Comprehensive Support System</h3>
                      <p className="text-muted-foreground">
                        From hostel facilities to personalized mentorship, we provide a complete ecosystem for your
                        preparation.
                      </p>
                    </div>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Focus on Results</h3>
                      <p className="text-muted-foreground">
                        Our structured approach emphasizes conceptual clarity and answer writing skills, essential for
                        success in civil services examinations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Salient Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Unique Approach</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What sets Care IAS apart from other coaching institutes is our personalized approach and commitment to
                  each student's success.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Meetings</h3>
                  <p className="text-muted-foreground">
                    Daily personalized meetings with students post class to assess their notes making, preparation and
                    motivation level.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Dual Monitoring</h3>
                  <p className="text-muted-foreground">
                    Guidance by teachers and observation by parents to daily monitor the progress of aspirant.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Care Officer</h3>
                  <p className="text-muted-foreground">
                    Class & test attendance to be maintained 100% with dedicated Care Officers monitoring student
                    progress.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Daily Answer Writing</h3>
                  <p className="text-muted-foreground">
                    Daily answer writing and evaluation for 1 year taking our aspirants way ahead of other aspirants.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Lifetime Test Access</h3>
                  <p className="text-muted-foreground">
                    Lifetime access to weekly test series at our campus, ensuring continuous practice and improvement.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Essay Guidance</h3>
                  <p className="text-muted-foreground">
                    Specialized essay guidance program to help students excel in this critical component of the UPSC
                    examination.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Civil Servant Mentorship</h3>
                  <p className="text-muted-foreground">
                    Timely guidance and motivation by civil servants who have successfully navigated the UPSC journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Mains Test Series</h3>
                  <p className="text-muted-foreground">
                    Comprehensive mains test series followed by face-to-face copy evaluation for personalized feedback.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-muted">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">DAF Analysis</h3>
                  <p className="text-muted-foreground">
                    Detailed DAF (Detailed Application Form) analysis by experts to prepare students for the interview
                    stage.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <FeaturesAnimation />
            </div>
          </div>
        </section>

        <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Aligarh?</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Aligarh vs Delhi: The Smart Choice</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare the benefits of studying in Aligarh versus Delhi and see why Care IAS in Aligarh offers the
                  best of both worlds.
                </p>
              </div>
            </div>
            <div className="mt-12 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px] font-bold text-lg">Comparison</TableHead>
                    <TableHead className="font-bold text-lg">Aligarh</TableHead>
                    <TableHead className="font-bold text-lg">Delhi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Coaching fees</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">Under 1 lakh</TableCell>
                    <TableCell>1.5-2.2 lakh</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PG rent</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">
                      Rs. 5000-7000 good PGs are available
                    </TableCell>
                    <TableCell>Good PGs costs Rs. 13,000-15,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Class strength</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">Under 100</TableCell>
                    <TableCell>Up to 400</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Teacher attention</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">Knows everyone by name</TableCell>
                    <TableCell>Not possible</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Travelling time</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">10-15 minutes</TableCell>
                    <TableCell>Up to 1 hour for most students</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Safety</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">Safe</TableCell>
                    <TableCell>Matter of concern for many</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quality of life</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">Good</TableCell>
                    <TableCell>Air pollution a concern</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mental well being</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">
                      Teacher and parents cooperate to help students cope up with competition
                    </TableCell>
                    <TableCell>Fierce competition combined with high fees induces stress in students</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Food quality</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">
                      Moderate to good at reasonable rates
                    </TableCell>
                    <TableCell>Same quality but expensive</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Parental supervision</TableCell>
                    <TableCell className="text-green-700 dark:text-green-400">
                      Possible for resident of Aligarh
                    </TableCell>
                    <TableCell>Not possible</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section id="faculty" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Expert Faculty</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Faculty Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team consists of experienced educators with proven track records in civil services coaching.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Arun%20Kumar%20Pandey.png"
                      width={160}
                      height={160}
                      alt="Arun Kumar Pandey"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Arun Kumar Pandey</h3>
                    <p className="text-sm text-muted-foreground">Director, Care IAS</p>
                    <p className="text-sm text-muted-foreground">Ex-Head Ajmal IAS Academy</p>
                    <p className="mt-2 text-muted-foreground">Faculty: Indian Economy</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Mazir%20Abbasi.png"
                      width={160}
                      height={160}
                      alt="Mazir Abbasi"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Mazir Abbasi</h3>
                    <p className="text-sm text-muted-foreground">Academic Head, Care IAS</p>
                    <p className="text-sm text-muted-foreground">Ex-Ajmal IAS, Ex-Jamia RCA Resident</p>
                    <p className="mt-2 text-muted-foreground">Faculty: Environment & Ecology, GS-4</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Dr.%20Mukarram%20B.%20Khan.png"
                      width={160}
                      height={160}
                      alt="Dr. Mukarram B. Khan"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Mukarram B. Khan</h3>
                    <p className="text-sm text-muted-foreground">Bano IAS, Ex-Jamia</p>
                    <p className="text-sm text-muted-foreground">RCA Resident</p>
                    <p className="mt-2 text-muted-foreground">Faculty: Indian Polity</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Ashwini%20Chaudhary.png"
                      width={160}
                      height={160}
                      alt="Ashwini Chaudhary"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ashwini Chaudhary</h3>
                    <p className="text-sm text-muted-foreground">IIT-K</p>
                    <p className="mt-2 text-muted-foreground">Faculty: CSAT</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Appu%20Tiwari.png"
                      width={160}
                      height={160}
                      alt="Appu Tiwari"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Appu Tiwari</h3>
                    <p className="text-sm text-muted-foreground">Sunya IAS, Path Academy</p>
                    <p className="mt-2 text-muted-foreground">Faculty: Science & Technology</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Dr.%20Imam-ul-Haq.png"
                      width={160}
                      height={160}
                      alt="Dr. Imam-ul-Haq"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Imam-ul-Haq</h3>
                    <p className="text-sm text-muted-foreground">Bano IAS</p>
                    <p className="text-sm text-muted-foreground">Ex-Jamia RCA Resident</p>
                    <p className="mt-2 text-muted-foreground">Faculty: History</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Dr.%20Muzahir%20Quazi.png"
                      width={160}
                      height={160}
                      alt="Dr. Muzahir Quazi"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Muzahir Quazi</h3>
                    <p className="text-sm text-muted-foreground">Ex-Jamia RCA Resident</p>
                    <p className="mt-2 text-muted-foreground">Faculty: Geography & Disaster Management</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Jitendra%20Patnaik.png"
                      width={160}
                      height={160}
                      alt="Jitendra Patnaik"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Jitendra Patnaik</h3>
                    <p className="text-sm text-muted-foreground">Ex-Kalhana, IAS</p>
                    <p className="mt-2 text-muted-foreground">Faculty: Governance & Indian Society</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src="/Faiz%20Ansari.png"
                      width={160}
                      height={160}
                      alt="Faiz Ansari"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Faiz Ansari</h3>
                    <p className="text-sm text-muted-foreground">Ex-PW Only IAS, Ex-Jamia RCA Resident</p>
                    <p className="mt-2 text-muted-foreground">Faculty: International Relations & Internal Security</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Success Stories</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our students who have successfully cleared various stages of the civil services
                  examinations.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <TestimonialSlider />
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Contact Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have questions? Reach out to us for more information about our programs and enrollment process.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 hover:bg-background">
                    <MapPin className="h-6 w-6" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">2nd Floor, Kalyan Singh Habitat Center, Aligarh</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 hover:bg-background">
                    <Phone className="h-6 w-6" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+91-8171774050, +91-8126774050</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 hover:bg-background">
                    <Instagram className="h-6 w-6" />
                    <div>
                      <h3 className="font-bold">Instagram</h3>
                      <p className="text-muted-foreground">@care.ias</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 hover:bg-background">
                    <Clock className="h-6 w-6" />
                    <div>
                      <h3 className="font-bold">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-bold">Enroll Now</h3>
                        <p className="text-muted-foreground">
                          Limited Seats Available!{" "}
                          <span className="font-semibold">20% OFF for first 20 admissions!</span>
                        </p>
                        <p className="text-muted-foreground font-semibold">
                          Batches Begin From 10<sup>th</sup> June 2025
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label
                              htmlFor="first-name"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              First Name
                            </label>
                            <input
                              id="first-name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="John"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="last-name"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Last Name
                            </label>
                            <input
                              id="last-name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="course"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Interested In
                          </label>
                          <select
                            id="course"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select a program</option>
                            <option value="upsc">UPSC Preparation</option>
                            <option value="uppsc">UPPSC Preparation</option>
                            <option value="bpsc">BPSC Preparation</option>
                            <option value="apsc">APSC Preparation</option>
                            <option value="complete">Complete Package</option>
                          </select>
                        </div>
                        <Button className="w-full transition-all duration-300 hover:scale-105">Submit Inquiry</Button>
                        <p className="text-xs text-center text-muted-foreground">
                          Our team will contact you within 24 hours to discuss your enrollment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground text-background">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Enroll Now – Limited Seats Available!
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-background/90 md:text-xl">
              Don't miss this opportunity to prepare for UPSC, UPPSC, BPSC, and APSC with Delhi-level expertise right
              here in Aligarh.
            </p>
            <div className="mt-4 mb-8">
              <Badge
                variant="outline"
                className="text-lg font-semibold border-2 px-4 py-2 border-background text-background"
              >
                SPECIAL OFFER: 20% OFF for first 20 admissions!
              </Badge>
            </div>
            <div className="mt-4 mb-4">
              <Badge
                variant="outline"
                className="text-lg font-semibold border-2 px-4 py-2 border-background text-background"
              >
                Batches Begin From 10<sup>th</sup> June 2025
              </Badge>
            </div>
            <div className="mt-8 animate-bounce">
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 hover:scale-105"
                >
                  Contact Us Today
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <div className="flex items-center gap-2">
              {/* Logo placeholder - will be replaced with actual logo */}
              <div className="relative h-8 w-32 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                  <span className="font-bold text-xs">CARE IAS</span>
                </div>
              </div>
              <span className="font-bold">Care IAS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Care IAS. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91-8171774050, +91-8126774050</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">2nd Floor, Kalyan Singh Habitat Center, Aligarh</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
