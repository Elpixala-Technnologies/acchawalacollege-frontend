import { ArrowCircleDownOutlined } from "@mui/icons-material";

export default function CollegePredictorCard() {
    return (
        <>
            <section className="flex justify-center w-95">
                <div className="bg-gradient-to-r from-[#FFC444] via-[#FFE478] to-[#FFC05D] p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-2">JEE Main College Predictor</h2>
                    <div className="mb-2">Predict your top engineering college admission chances based on your JEE Main All <br />
                        India Rank & NTA Score.</div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"><ArrowCircleDownOutlined />User Now</button>
                </div>
            </section>
        </>
    );
}
