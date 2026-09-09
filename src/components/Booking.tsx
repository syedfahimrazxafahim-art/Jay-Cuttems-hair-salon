import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Scissors,
  CheckCircle2,
  AlertCircle,
  FileText,
  PhoneCall,
  RotateCcw
} from 'lucide-react';
import {
  BUSINESS_INFO,
  SERVICES_DATA,
  BARBERS_DATA
} from '../data/barbershopData';
import { AppointmentRequest, ThemeMode } from '../types';

interface BookingProps {
  theme: ThemeMode;
  preselectedServiceId?: string;
  preselectedBarberId?: string;
}

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
];

export const Booking: React.FC<BookingProps> = ({
  theme,
  preselectedServiceId,
  preselectedBarberId,
}) => {
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<AppointmentRequest>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || SERVICES_DATA[0].id,
    serviceName: SERVICES_DATA[0].name,
    barberId: preselectedBarberId || BARBERS_DATA[0].id,
    barberName: BARBERS_DATA[0].name,
    date: '',
    timeSlot: TIME_SLOTS[2],
    notes: '',
  });

  const [submittedRequest, setSubmittedRequest] = useState<AppointmentRequest | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update when preselection changes from props
  useEffect(() => {
    if (preselectedServiceId) {
      const match = SERVICES_DATA.find((s) => s.id === preselectedServiceId);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          serviceId: match.id,
          serviceName: match.name,
        }));
      }
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedBarberId) {
      const match = BARBERS_DATA.find((b) => b.id === preselectedBarberId);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          barberId: match.id,
          barberName: match.name,
        }));
      }
    }
  }, [preselectedBarberId]);

  // Set minimum date to today
  const todayString = new Date().toISOString().split('T')[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'serviceId') {
        const found = SERVICES_DATA.find((s) => s.id === value);
        if (found) updated.serviceName = found.name;
      }
      if (name === 'barberId') {
        const found = BARBERS_DATA.find((b) => b.id === value);
        if (found) updated.barberName = found.name;
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.date) {
      setErrorMessage('Please fill in your name, contact phone number, and preferred date.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift appointment request receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRequest({ ...formData });
    }, 400);
  };

  const handleReset = () => {
    setSubmittedRequest(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceId: SERVICES_DATA[0].id,
      serviceName: SERVICES_DATA[0].name,
      barberId: BARBERS_DATA[0].id,
      barberName: BARBERS_DATA[0].name,
      date: '',
      timeSlot: TIME_SLOTS[2],
      notes: '',
    });
  };

  return (
    <section
      id="booking"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#EFEFEA]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#E10600]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E10600]">
              Chair Reservations
            </span>
            <span className="h-[2px] w-6 bg-[#E10600]" />
          </div>

          <h2
            id="booking-heading"
            className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
          >
            {BUSINESS_INFO.bookingHeadline}
          </h2>

          <p className={`text-base sm:text-lg font-body max-w-2xl mx-auto ${
            isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
          }`}>
            {BUSINESS_INFO.bookingSubheadline}
          </p>

          {/* Honest booking flow disclaimer */}
          <div className={`mt-4 inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border ${
            isDark ? 'bg-[#151515] border-[#151515] text-[#C7C7C7]' : 'bg-white border-[#E8E8E8] text-[#666666]'
          }`}>
            <AlertCircle className="w-3.5 h-3.5 text-[#E10600] shrink-0" />
            <span>Appointment Request Flow: Your requested slot will be confirmed directly by the barbershop team.</span>
          </div>
        </div>

        {/* Card Container */}
        <div
          className={`rounded-xl p-6 sm:p-10 border transition-all duration-300 ${
            isDark
              ? 'bg-[#151515] border-[#222222] shadow-2xl'
              : 'bg-white border-[#E8E8E8] shadow-xl'
          }`}
        >
          {submittedRequest ? (
            /* Confirmation State with Honest Request Notice */
            <div id="booking-confirmation-panel" className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#E10600]/10 border-2 border-[#E10600] text-[#E10600] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E10600] text-white">
                  Request Received
                </span>
                <h3
                  className={`font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wide mt-3 mb-2 ${
                    isDark ? 'text-white' : 'text-[#151515]'
                  }`}
                >
                  APPOINTMENT REQUEST LOGGED
                </h3>
                <p className={`text-sm max-w-lg mx-auto ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
                  Thank you, <strong className="text-[#E10600]">{submittedRequest.fullName}</strong>. Your appointment request for Jay Cut’em’s Barbershop has been logged with the details below.
                </p>
              </div>

              {/* Summary Details Box */}
              <div
                className={`max-w-md mx-auto p-5 rounded-lg border text-left space-y-3 ${
                  isDark ? 'bg-[#080808] border-[#222222]' : 'bg-[#F7F7F5] border-[#E8E8E8]'
                }`}
              >
                <div className="flex justify-between text-xs">
                  <span className="text-[#BDBDBD]">Service Requested:</span>
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                    {submittedRequest.serviceName}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#BDBDBD]">Preferred Barber:</span>
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                    {submittedRequest.barberName}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#BDBDBD]">Requested Date:</span>
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                    {submittedRequest.date}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#BDBDBD]">Requested Time:</span>
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                    {submittedRequest.timeSlot}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#BDBDBD]">Contact Phone:</span>
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                    {submittedRequest.phone}
                  </span>
                </div>
                {submittedRequest.email && (
                  <div className="flex justify-between text-xs">
                    <span className="text-[#BDBDBD]">Email:</span>
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                      {submittedRequest.email}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 rounded bg-[#E10600]/10 border border-[#E10600]/30 text-xs text-left max-w-md mx-auto flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#E10600] shrink-0 mt-0.5" />
                <p className={isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'}>
                  <strong>Next step:</strong> Our team will confirm your chair booking via phone or SMS shortly. Need immediate assistance? Call us directly at{' '}
                  <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="underline font-bold text-[#E10600]">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="w-full sm:w-auto px-6 py-3 rounded font-heading font-bold text-sm tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>CALL SHOP DIRECTLY</span>
                </a>

                <button
                  onClick={handleReset}
                  className={`w-full sm:w-auto px-6 py-3 rounded font-heading font-bold text-sm tracking-wider uppercase border transition-colors flex items-center justify-center gap-2 ${
                    isDark
                      ? 'border-[#222222] text-[#BDBDBD] hover:text-white bg-[#080808]'
                      : 'border-[#E8E8E8] text-[#151515] hover:text-[#E10600] bg-white'
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>MAKE ANOTHER REQUEST</span>
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form id="appointment-booking-form" onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3.5 rounded bg-[#E10600]/15 border border-[#E10600] text-xs font-semibold text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#E10600] shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                      isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                    }`}
                  >
                    Full Name <span className="text-[#E10600]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Marcus Johnson"
                      className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white placeholder-[#666666]'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515] placeholder-[#999999]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                      isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                    }`}
                  >
                    Phone Number <span className="text-[#E10600]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. 713-555-0199"
                      className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white placeholder-[#666666]'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515] placeholder-[#999999]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                      isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                    }`}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. marcus@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white placeholder-[#666666]'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515] placeholder-[#999999]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="serviceId"
                    className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                      isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                    }`}
                  >
                    Select Service <span className="text-[#E10600]">*</span>
                  </label>
                  <div className="relative">
                    <Scissors className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                    <select
                      id="serviceId"
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] appearance-none ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515]'
                      }`}
                    >
                      {SERVICES_DATA.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Choose Barber */}
              <div>
                <label
                  htmlFor="barberId"
                  className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                    isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                  }`}
                >
                  Choose Barber <span className="text-[#E10600]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                  <select
                    id="barberId"
                    name="barberId"
                    value={formData.barberId}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] appearance-none ${
                      isDark
                        ? 'bg-[#080808] border-[#222222] text-white'
                        : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515]'
                    }`}
                  >
                    {BARBERS_DATA.map((barber) => (
                      <option key={barber.id} value={barber.id}>
                        {barber.name} — {barber.specialty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="date"
                    className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                      isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                    }`}
                  >
                    Preferred Date <span className="text-[#E10600]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={todayString}
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeSlot"
                    className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                      isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                    }`}
                  >
                    Preferred Time <span className="text-[#E10600]">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] appearance-none ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515]'
                      }`}
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 5: Additional Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className={`block text-xs uppercase font-bold tracking-wider mb-2 ${
                    isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                  }`}
                >
                  Additional Notes (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#E10600] absolute left-3.5 top-3.5" />
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Specific requests, styling references, or notes for your barber..."
                    className={`w-full pl-10 pr-4 py-3 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] resize-none ${
                      isDark
                        ? 'bg-[#080808] border-[#222222] text-white placeholder-[#666666]'
                        : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515] placeholder-[#999999]'
                    }`}
                  />
                </div>
              </div>

              {/* Primary CTA: BOOK NOW */}
              <button
                type="submit"
                id="booking-submit-cta"
                disabled={isSubmitting}
                className="w-full py-4 rounded font-heading font-bold text-lg tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-all duration-200 shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:shadow-[0_0_30px_rgba(225,6,0,0.6)] active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Calendar className="w-5 h-5" />
                <span>{isSubmitting ? 'PROCESSING REQUEST...' : 'BOOK NOW'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
