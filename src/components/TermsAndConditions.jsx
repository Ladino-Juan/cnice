import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-right mb-8">
          תנאי שימוש
        </h1>
        
        <div className="space-y-6 text-right">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. מבוא</h2>
            <p className="text-gray-700 leading-relaxed">
              ברוכים הבאים ל-CNICE. תנאי שימוש אלו מגדירים את החוקים והתקנות לשימוש באתר שלנו.
              על ידי גישה לאתר זה, אתם מסכימים לתנאים אלו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. שימוש במוצרים</h2>
            <p className="text-gray-700 leading-relaxed">
              כל המוצרים שלנו מיוצרים מחומרים טבעיים ואיכותיים. עם זאת, אנו ממליצים לבצע בדיקת רגישות לפני השימוש.
              CNICE אינה אחראית לתגובות אלרגיות או תופעות לוואי אישיות.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. פרטיות</h2>
            <p className="text-gray-700 leading-relaxed">
              אנו מכבדים את פרטיות המשתמשים שלנו. המידע האישי שלכם ישמש רק למטרות שירות והתאמה אישית של החוויה שלכם.
              לא נמכור או נשתף את המידע האישי שלכם עם צדדים שלישיים ללא הסכמתכם המפורשת.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. הזמנות ומשלוחים</h2>
            <p className="text-gray-700 leading-relaxed">
              הזמנות מתבצעות דרך האתר בלבד. זמן המשלוח הממוצע הוא 3-5 ימי עסקים.
              במקרה של עיכובים, נודיע לכם בהקדם האפשרי.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. החזרות והחלפות</h2>
            <p className="text-gray-700 leading-relaxed">
              ניתן להחזיר מוצרים בתוך 14 ימים ממועד הרכישה, בתנאי שהמוצר סגור ולא בשימוש.
              עלויות המשלוח להחזרה הן באחריות הלקוח.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. קניין רוחני</h2>
            <p className="text-gray-700 leading-relaxed">
              כל התוכן באתר זה, כולל טקסטים, תמונות, לוגואים ועיצוב, הם קניין רוחני של CNICE.
              אסור להעתיק, לשכפל או להשתמש בתוכן ללא אישור בכתב.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. שינויים בתנאים</h2>
            <p className="text-gray-700 leading-relaxed">
              אנו שומרים על הזכות לעדכן תנאים אלו בכל עת. שינויים ייכנסו לתוקף מייד עם פרסומם באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. יצירת קשר</h2>
            <p className="text-gray-700 leading-relaxed">
              לשאלות או הבהרות בנוגע לתנאים אלו, אנא צרו קשר דרך:
              <br />
              אימייל: info@cnice.com
              <br />
              טלפון: 03-1234567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;