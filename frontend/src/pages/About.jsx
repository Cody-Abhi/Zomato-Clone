import { FaBullseye, FaEye, FaUtensils } from "react-icons/fa";

// The About page.
// Shows our story, mission and vision sections.
function About() {
  return (
    <div>
      {/* Hero banner */}
      <div className="bg-primary py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FaUtensils className="mx-auto text-4xl text-white" />
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            About Foodie
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-white/80">
            We are on a mission to connect people with the food they love, from
            the restaurants they trust, delivered fresh and fast.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1414235077428-3389896ce3f7?w=800&q=80"
            alt="Our restaurant"
            className="rounded-2xl object-cover shadow-card"
          />
          <div>
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Our Story
            </h2>
            <p className="mt-4 text-gray-600">
              Foodie started in 2024 with a simple idea: make great food
              accessible to everyone, anywhere. What began as a small project
              has grown into a platform connecting thousands of restaurants
              with hungry customers every day.
            </p>
            <p className="mt-3 text-gray-600">
              We believe food is more than just a meal — it's an experience.
              That's why we partner with the best local restaurants to bring
              you a variety of cuisines, all delivered with care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision cards */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl bg-background p-8 shadow-soft">
              <FaBullseye className="text-3xl text-primary" />
              <h3 className="mt-4 text-xl font-bold text-text">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To make ordering food effortless, fast and delightful for
                everyone, while helping restaurants grow their business.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-background p-8 shadow-soft">
              <FaEye className="text-3xl text-primary" />
              <h3 className="mt-4 text-xl font-bold text-text">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To be the most loved food delivery platform, bringing people
                and great food closer together, one order at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
