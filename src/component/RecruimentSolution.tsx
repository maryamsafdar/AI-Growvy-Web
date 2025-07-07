export default function RecruitmentSolution() {
  {
    /* Pricing Cards */
  }
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-20 max-w-6xl mx-auto"
      data-aos="fade-up"
    >
      {[
        {
          title: "Basic CV Service",
          description:
            "Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
          cost: "Price $30 (9797 PKR) Discount 20% ($5600 PKR) Monthly",
          benefits: [
            "Companies can access the database with monthly 200 Searches",
            "Manage Filters Like Skills, Cities, Experience etc",
            "Live chat experts help",
          ],
        },
        {
          title: "Lead Generating",
          description:
            "Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on Cost Candidate’s approach.",
          cost: "Price $50 (6998 PKR)\n(50% will apply per 20 Candidates)",
          benefits: [
            "Companies can create a job post on Growvy",
            "Manage Filters like Skills, Cities, Experience etc",
            "Guide our Team to shortlist best candidates",
            "Live chat experts help",
          ],
        },
        {
          title: "Recruitment Service",
          description:
            "Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.",
          cost: "Price 40% of first Salary (For one candidate)\n(Can avail monthly package after one subscription)",
          benefits: [
            "Client can create a job post",
            "Filters like Skills, Cities, Exp etc",
            "Minor screening interview",
            "Whatsapp group with Team",
            "Complete A-Z hiring solution",
          ],
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-green-900 via-lime-600 to-yellow-500 p-[6px] rounded-3xl shadow-md h-full"
        >
          <div className="bg-white rounded-2xl p-6 text-left flex flex-col h-full justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2 text-center text-green-800">
                {card.title}
              </h3>
              <p className="text-sm mb-3 text-gray-700">{card.description}</p>
              <p className="text-sm text-black mb-3 whitespace-pre-line">
                <strong>Service Cost:</strong>
                <br />
                {card.cost}
              </p>
              <p className="font-semibold mb-1">Benefits:</p>
              <ul className="text-sm list-disc list-inside text-gray-700 mb-4 space-y-1">
                {card.benefits.map((benefit, j) => (
                  <li key={j}>{benefit}</li>
                ))}
              </ul>
            </div>
            <button className="bg-green-600 text-white w-full py-2 rounded-full font-semibold hover:bg-green-700 transition mt-5">
              Start Today
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
