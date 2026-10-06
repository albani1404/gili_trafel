import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import { destinations } from '../data/destinations';
import { contactDetails } from '../data/navigation';

const inputClasses =
  'block h-12 w-full rounded-lg border border-line bg-white px-4 py-3 text-[0.9375rem] text-text placeholder:text-muted/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20';

function Field({ id, label, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && (
          <span className="text-danger" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const infoItems = [
  { icon: Mail, label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}` },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, '')}`,
  },
  { icon: MapPin, label: 'Office', value: contactDetails.address },
  { icon: Clock, label: 'Opening hours', value: contactDetails.hours },
];

const emptyForm = { name: '', email: '', phone: '', message: '' };

/**
 * `destination` and `onDestinationChange` are owned by the page so that
 * clicking "Enquire" on a destination card can pre-select it here.
 */
export default function ContactSection({ destination, onDestinationChange }) {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setForm(emptyForm);
    onDestinationChange('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section-y scroll-mt-16 border-t border-line bg-surface" aria-labelledby="contact-heading">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <h2 id="contact-heading" className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Contact us
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
            Questions about a destination, or ready to plan a trip? Send us a message and we will
            get back to you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Contact details */}
          <aside className="lg:col-span-4">
            <h3 className="text-lg font-bold text-ink">Contact details</h3>
            <ul className="mt-6 flex flex-col gap-6">
              {infoItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-muted">{label}</p>
                    {Array.isArray(value) ? (
                      <p className="font-medium leading-relaxed text-ink">
                        {value[0]}
                        <br />
                        {value[1]}
                      </p>
                    ) : (
                      <a href={href} className="break-words font-medium text-ink hover:text-brand">
                        {value}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-line bg-white p-5">
              <h3 className="font-semibold text-ink">Need a quick answer?</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Message us on WhatsApp for fast replies and booking help.
              </p>
              <Button
                href={contactDetails.whatsapp}
                variant="secondary"
                size="sm"
                className="mt-4"
                icon={MessageCircle}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-line bg-white p-6 shadow-card md:p-8">
              {submitted ? (
                <div className="py-8 text-center" role="status">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-soft text-success">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-ink">Message sent</h3>
                  <p className="mx-auto mt-2 max-w-sm text-muted">
                    Thanks, {form.name.split(' ')[0] || 'traveler'}. We will reply to {form.email}{' '}
                    shortly.
                  </p>
                  <Button variant="secondary" className="mt-6" onClick={reset}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-ink">Send us a message</h3>
                  <p className="mt-1 text-sm text-muted">
                    Fields marked with <span className="text-danger">*</span> are required.
                  </p>

                  <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                    <Field id="full-name" label="Full name" required>
                      <input
                        id="full-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={update('name')}
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </Field>

                    <Field id="email-address" label="Email" required>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        className={inputClasses}
                        placeholder="you@example.com"
                      />
                    </Field>

                    <Field id="phone-number" label="Phone number">
                      <input
                        id="phone-number"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        className={inputClasses}
                        placeholder="+62 812 3456 7890"
                      />
                    </Field>

                    <Field id="destination" label="Destination">
                      <select
                        id="destination"
                        name="destination"
                        value={destination}
                        onChange={(e) => onDestinationChange(e.target.value)}
                        className={inputClasses}
                      >
                        <option value="">Not sure yet</option>
                        {destinations.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}, {d.country}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <div className="sm:col-span-2">
                      <Field id="message" label="Message" required>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={form.message}
                          onChange={update('message')}
                          className={`${inputClasses} h-auto resize-y`}
                          placeholder="Travel dates, group size, or anything we should know"
                        />
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <Button type="submit" size="lg" icon={Send} className="w-full sm:w-auto">
                        Send message
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
