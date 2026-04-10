import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: '11 Questions to Ask Before Hiring a Roof Replacement Contractor in Chicago',
  description: 'Before signing any contract, ask your Chicago roofing contractor these 9 questions — license, permit, insurance, warranty, and more.',
};

const questions = [
  {
    q: 'Do all your workers hold an active Illinois IDFPR roofing license?',
    a: 'Preferred answer: Yes — and we can show you our license number right now.',
  },
  {
    q: 'Do you pull the Chicago Building Permit and include the fee in the contract?',
    a: 'Preferred answer: Yes — we handle the permit and it is included in the price.',
  },
  {
    q: 'Do you have liability insurance and workers\' compensation?',
    a: 'Preferred answer: Yes — here is our certificate of insurance.',
  },
  {
    q: 'Do you help prepare documents for the insurance company?',
    a: 'Preferred answer: Yes — we document everything before work begins.',
  },
  {
    q: 'Will your representative attend the meeting with the insurance adjuster?',
    a: 'Preferred answer: Yes — at no extra charge.',
  },
  {
    q: 'Do you offer a warranty on labor and a separate warranty on materials?',
    a: 'Preferred answer: Yes — minimum 5 years on labor in writing, plus manufacturer warranty on materials.',
  },
  {
    q: 'If it rains or wind picks up off the lake while my roof is open — what is your protocol?',
    a: 'Preferred answer: We have tarps on site and a clear plan for any weather emergency.',
  },
  {
    q: 'Does the estimate include debris removal, tear-off, and nail cleanup?',
    a: 'Preferred answer: Yes — including magnetic nail sweep of the entire property.',
  },
  {
    q: 'Do you guarantee the final cost will not exceed the estimate?',
    a: 'Preferred answer: Yes — fixed price. Any changes require your written approval.',
  },
  {
    q: 'Do you offer a free on-site inspection before the estimate?',
    a: 'Preferred answer: Yes — we inspect the roof, attic, and flashing at no charge before any commitment.',
  },
  {
    q: 'Is your crew local to Chicago — or do you bring in out-of-state teams?',
    a: 'Preferred answer: We are a local Chicago company. Our crew lives and works here year-round.',
  },
];

export default function QuestionsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>← Back to main page</Link>
        <h1>11 questions to ask before you hire a roof replacement contractor in Chicago</h1>
        <ol className={styles.questionsList}>
          {questions.map((item, i) => (
            <li key={i} className={styles.questionsItem}>
              <p className={styles.questionsQ}>{item.q}</p>
              <p className={styles.questionsA}>{item.a}</p>
            </li>
          ))}
        </ol>
        <Link href="/" className={styles.backLink}>← Back to main page</Link>
      </div>
    </main>
  );
}
