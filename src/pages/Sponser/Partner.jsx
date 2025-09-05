import React from 'react';
import Layout from '../../components/Layout';
import { TiTick } from "react-icons/ti";

const Partner = () => {
  return (
    <Layout>
      <section
        className="min-h-[650px] bg-fixed bg-center bg-cover bg-no-repeat p-8"
        style={{ backgroundImage: "url('/sponserbg.webp')" }}
      >
        <div
          style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.55),rgba(2, 2, 2, 0.55))' }}
          className="max-w-6xl mx-auto rounded-3xl p-6 glass-card"
        >
          <table className="table-auto w-full text-white text-center rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-lime-700/30 uppercase">
                <th className="border px-4 py-3">Criteria</th>
                <th className="border px-4 py-3">Platinum Sponsor Rs 100k+</th>
                <th className="border px-4 py-3">Gold Sponsor Rs 50k+</th>
                <th className="border px-4 py-3">Silver Sponsor Rs 20k+</th>
                <th className="border px-4 py-3">Sponsor less than Rs 20k</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Logo on uniform", true, false, false, false],
                ["Recognition in news coverage", true, false, false, false],
                ["Appreciation in our videos", true, true, false, false],
                ["Logo on Vehicle", true, true, true, false],
                ["Recognition at event and college", true, true, true, false],
                ["Appreciation on social media", true, true, true, true],
              ].map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-black/20' : 'bg-black/10'}`}>
                  <td className="border px-4 py-3 text-left font-semibold">{row[0]}</td>
                  {row.slice(1).map((cell, idx) => (
                    <td key={idx} className="border px-4 py-3">
                      {cell ? <TiTick size={28} className="mx-auto text-lime-500" /> : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default Partner;
