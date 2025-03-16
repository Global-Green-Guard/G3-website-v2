import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { StatCard } from "@/components/stat-card"
import { MissionItem } from "@/components/mission-item"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="block">Driving</span>
              <span className="block text-primary">Sustainable</span>
              <span className="block">Change</span>
            </h1>
            <Button className="mt-8 bg-black/70 hover:bg-black border border-primary text-white px-8 py-6 rounded-md group">
              Get Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="absolute bottom-20 right-10 max-w-md">
            <p className="text-lg">
              We are a permanent capital force dedicated to fostering a diverse and extensive portfolio of high-quality
              carbon credit streams and royalties.
            </p>
          </div>
          <div className="absolute bottom-10 left-4">
            <span className="text-xl font-bold">01</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <span className="text-primary mb-4 block">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
                We are a driving force behind impactful and sustainable change. Our mission is to empower developers of
                high-quality carbon projects, creating a positive ripple effect for both the planet and our partners.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/case1-before.jpg"
                alt="Person in nature"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 max-w-md">
                <Image src="/images/thirdman.jpg?height=40&width=40" alt="Logo" width={40} height={40} className="mb-4" />
                <p className="text-white">
                  Global Green Guard is committed to supporting developers of high-quality carbon projects. We provide
                  not just funding but a collaborative partnership to amplify the positive environmental and social
                  impacts.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl p-12 flex flex-col justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/wildfire.jpg"
                  alt="Investment background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white rounded-full p-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Explore Investment Opportunities</h3>
                <Button
                  variant="outline"
                  className="mt-4 self-start border-black text-white hover:bg-black/10 hover:text-black group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary mb-4 block">OUR VISION</span>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 max-w-md">
                To pioneer a future where financial prosperity seamlessly intertwines with ecological health, creating a
                world where sustainable initiatives thrive, and communities prosper.
              </h2>

              <div className="grid grid-cols-2 gap-8 mt-16">
                <StatCard value="$45M" label="Financing for sustainability" />
                <StatCard value="58M" label="Tons of carbon mitigated" />
                <StatCard value="5.2M" label="Trees planted" />
                <StatCard value="1.2M" label="Clean energy" />
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[500px]">
              <Image
                src="/images/pollution.jpg"
                alt="Coastal landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative rounded-xl overflow-hidden h-[600px]">
              <Image
                src="/images/case2-before.jpg"
                alt="Close-up of moss"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <span className="text-primary">OUR MISSION</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-primary mb-8">Empower Carbon Pioneers</h2>
              <p className="text-lg mb-8">
                Provide robust financial backing and support to developers of high-quality carbon projects, fostering
                innovation and positive environmental impact.
              </p>

              <div className="space-y-6">
                <MissionItem title="Global Carbon Mitigation" />
                <MissionItem title="Eco-Conscious Reforestation" />
                <MissionItem title="Clean Energy Solutions" />
                <MissionItem title="Environmental Empowerment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            <h2 className="text-6xl md:text-8xl font-bold mb-12">
              <span className="text-primary">Global</span> Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-xl overflow-hidden h-[400px]">
                <Image
                  src="/images/nature-bg.jpg"
                  alt="Plant leaves"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-primary/90 p-6 rounded-lg max-w-[200px] text-center">
                    <Leaf className="h-8 w-8 mx-auto mb-2 text-black" />
                    <p className="text-black font-medium">Financial backing and support</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xl md:text-2xl mb-8">
                  With 58 million metric tons of carbon mitigated, we are making a significant contribution to combating
                  climate change on a global scale. Our commitment extends to the environment, with 5.2 million trees
                  planted to date, fostering biodiversity and restoring ecosystems.
                </p>
                <Button className="self-start bg-black/70 hover:bg-black border border-primary text-white px-8 py-6 rounded-md group">
                  Get Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary">OUR PROJECTS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard
              number="01"
              title="Renewable Energy Ventures"
              description="Fund and implement solar and wind energy projects in underserved regions, providing clean and sustainable energy."
              imageUrl="/images/green-energy.jpg"
            />
            <ProjectCard
              number="02"
              title="Rainforest Preservation Project"
              description="Protect and regenerate the Rainforest, mitigating carbon emissions and preserving biodiversity."
              imageUrl="/images/mikegreer.jpg"
            />
            <ProjectCard
              number="03"
              title="Clean Cooking Solutions"
              description="Fund initiatives for the distribution of fuel-efficient cookstoves, reducing carbon emissions and improving air quality."
              imageUrl="/images/solar.jpg"
            />
            <ProjectCard
              number="04"
              title="Urban Green Spaces"
              description="Create green spaces in urban areas, enhancing environmental sustainability and providing recreational spaces."
              imageUrl="/images/Agriculture App UI UX Design.jpg"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="link" className="text-white group">
              See More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case1-after.jpg"
            alt="Sunlight through trees"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="block">Become a</span>
              <span className="block text-primary">Global Green Guard</span>
              <span className="block">Partner</span>
            </h2>
            <Button className="mt-8 bg-black/70 hover:bg-black border border-primary text-white px-8 py-6 rounded-md group">
              Get Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="absolute bottom-20 right-10 max-w-md">
            <p className="text-lg">
              Collaborate with us to drive sustainable projects and initiatives. Let's work together to make a
              difference.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

