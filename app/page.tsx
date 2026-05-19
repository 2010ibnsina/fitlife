export default function WeightLossLandingPage() {
  const tips = [
    {
      title: "Healthy Eating",
      desc: "Simple meal strategies and balanced nutrition plans for sustainable fat loss.",
      icon: "🥗",
    },
    {
      title: "Daily Workouts",
      desc: "Easy beginner-friendly exercises you can do at home without equipment.",
      icon: "🏋️",
    },
    {
      title: "Mind & Motivation",
      desc: "Stay consistent with positive habits, sleep, hydration, and motivation.",
      icon: "🧠",
    },
  ];

  const articles = [
    "10 Easy Ways to Lose Belly Fat Naturally",
    "Best Morning Habits for Fast Weight Loss",
    "Simple Home Exercises for Beginners",
    "Healthy Foods That Burn Fat Faster",
  ];

  const AD_COMBO_LINK =
    "https://uh4f4601a5uh.uewhbgfvds.cc/?target=-7EBNQCgQAAAdSBwUDHW4ABQEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      {/* Google Ads Script */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3816913560694484"
        crossOrigin="anonymous"
      ></script>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-300/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              Healthy Lifestyle & Fat Loss
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Body
              <span className="text-green-600"> Naturally</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover smart nutrition, simple workouts, and healthy habits
              that help you lose weight safely and stay motivated every day.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={AD_COMBO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform inline-block"
              >
                Start Weight Loss Journey
              </a>

              <button className="px-6 py-3 rounded-2xl border border-green-300 bg-white hover:bg-green-50 transition">
                Explore Articles
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[2rem] shadow-2xl p-6 border border-green-100">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                alt="Fitness"
                className="rounded-3xl h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Healthy Weight Loss Tips
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn practical and realistic strategies to improve your body,
            energy, and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 hover:-translate-y-2 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-6">
                {tip.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">{tip.title}</h3>

              <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2">Latest Articles</h2>

              <p className="text-gray-600">
                Publish SEO-friendly articles here to get Google traffic.
              </p>
            </div>

            <button className="px-5 py-3 rounded-2xl bg-green-600 text-white font-medium shadow-lg hover:scale-105 transition-transform">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-green-100"
              >
                <img
                  src={`https://picsum.photos/500/30${index}`}
                  alt={article}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-3 leading-snug">
                    {article}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5">
                    Learn healthy strategies and simple lifestyle improvements.
                  </p>

                  <a
                    href={AD_COMBO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Start Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-green-600 to-emerald-500 p-10 lg:p-16 text-white shadow-2xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready To Start Your Transformation?
          </h2>

          <p className="text-lg text-green-50 max-w-2xl mx-auto mb-8">
            Build healthy habits, lose fat naturally, and improve your
            lifestyle step by step.
          </p>

          <a
            href={AD_COMBO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-white text-green-700 font-bold shadow-lg hover:scale-105 transition-transform inline-block"
          >
            Join The Journey
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100 bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-700">FitLife</h3>

            <p className="text-gray-500 mt-2">
              Healthy lifestyle & weight loss inspiration.
            </p>
          </div>

          <div className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-green-600">
              Home
            </a>

            <a href="#" className="hover:text-green-600">
              Articles
            </a>

            <a href="#" className="hover:text-green-600">
              About
            </a>

            <a href="#" className="hover:text-green-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
