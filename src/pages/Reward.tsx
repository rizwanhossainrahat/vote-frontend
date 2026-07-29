import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiSend } from 'react-icons/fi';
import type { RewardFormValues } from '../types';
import { validateImageFile } from '../utils';
import SectionTitle from '../components/SectionTitle';
import Input from '../components/Input';
import UploadInput from '../components/UploadInput';
import Button from '../components/Button';
import Card from '../components/Card';

const steps = [
  { num: '০১', title: 'ফেসবুকে শেয়ার করুন', desc: 'আমাদের পোস্টটি আপনার ফেসবুক প্রোফাইলে শেয়ার করুন।', icon: '📤' },
  { num: '০২', title: 'স্ক্রিনশট নিন', desc: 'শেয়ারের স্ক্রিনশট তুলুন এবং সংরক্ষণ করুন।', icon: '📸' },
  { num: '০৩', title: 'ফর্ম পূরণ করুন', desc: 'নাম, ফোন নম্বর ও স্ক্রিনশট দিয়ে নিচের ফর্ম পূরণ করুন।', icon: '📝' },
  { num: '০৪', title: 'পুরস্কার জিতুন', desc: 'ড্র-এ অংশ নিন এবং আকর্ষণীয় পুরস্কার জিতে নিন!', icon: '🎁' },
 
];

const BACKEND_URL = 'https://vote-backend-fn18.onrender.com';

export default function Reward() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RewardFormValues>();

  const onSubmit = async (data: RewardFormValues) => {
    // Validate image client-side first
    const file = data.screenshot?.[0];
    if (!file) {
      toast.error('স্ক্রিনশট আবশ্যক');
      return;
    }
    const validation = validateImageFile(file);
    if (validation !== true) {
      toast.error(validation);
      return;
    }

    try {
      setSubmitting(true);

      // The backend /draw endpoint accepts JSON { name, phone }
      // Screenshot is stored locally only (backend has no file upload endpoint)
      const response = await fetch(`${BACKEND_URL}/draw`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, phone: data.phone }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        const msg = (err as { message?: string }).message;
        throw new Error(msg ?? `Server error: ${response.status}`);
      }

      toast.success('Thank you for participating in the reward campaign.', {
        description: 'আপনার তথ্য সফলভাবে জমা হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।',
        duration: 5000,
      });
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="gradient-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className=" relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
          style={{marginTop:"50px"}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🎁</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">রিওয়ার্ড ক্যাম্পেইন</h1>
            <p className="text-green-200 text-xl">
              শেয়ার করুন, জয় করুন  আকর্ষণীয় পুরস্কারের সুযোগ!
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="কীভাবে অংশগ্রহণ করবেন?" subtitle="মাত্র ৪টি সহজ ধাপ অনুসরণ করুন" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-red-500" />
                <span className="text-3xl font-bold text-green-100 absolute top-2 right-3 select-none">
                  {step.num}
                </span>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-base font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>

              

            ))}
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
              <motion.div
                style={{marginTop:"20px"}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 5 * 0.1 }}
                className=" bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-red-500" />
                <span className="text-3xl font-bold text-green-100 absolute top-2 right-3 select-none">
                  
                </span>
                <div className="text-4xl mb-3">
                  </div>
                <h3 className="text-base font-bold text-gray-800 mb-2">আমাদের ক্যাম্পেইন বুঝতে সমস্যা হলে Youtube  ভিডিওটি দেখে নিতে পারেন</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/16y1AkoZkmQ?si=UpXoNtTZCx8ZE1PF"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
              </motion.div>
          </div>

        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionTitle title="ফর্ম পূরণ করুন" subtitle="নিচের ফর্মটি সঠিকভাবে পূরণ করুন" />

          <Card>
            <div className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <Input
                  label="আপনার নাম"
                  placeholder="পূর্ণ নাম লিখুন"
                  required
                  
                  registration={register('name', {
                    required: 'নাম আবশ্যক',
                    minLength: { value: 2, message: 'নাম কমপক্ষে ২ অক্ষর হতে হবে' },
                  })}
                  error={errors.name?.message}
                />

                {/* Phone */}
                <Input
                  label="মোবাইল নম্বর"
                  placeholder="যেমন: 01XXXXXXXXX"
                  type="tel"
                  required
                  
                  registration={register('phone', {
                    required: 'মোবাইল নম্বর আবশ্যক',
                    pattern: {
                      value: /^(?:\+88)?01[3-9]\d{8}$/,
                      message: 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)',
                    },
                  })}
                  error={errors.phone?.message}
                />

                {/* Screenshot upload */}
                <UploadInput
                  label="ফেসবুক শেয়ারের স্ক্রিনশট"
                  registration={register('screenshot', {
                    required: 'স্ক্রিনশট আবশ্যক',
                    validate: (files) => {
                      if (!files || files.length === 0) return 'স্ক্রিনশট আবশ্যক';
                      return validateImageFile(files[0]);
                    },
                  })}
                  error={errors.screenshot?.message}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  loading={submitting}
                  disabled={submitting}
                >
                  <FiSend /> জমা দিন
                </Button>
              </form>

              {/* Note */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-700">
                <p className="font-semibold mb-1">📌 গুরুত্বপূর্ণ তথ্য:</p>
                <ul className="space-y-1 text-xs list-disc list-inside">
                  <li>শুধুমাত্র JPG, JPEG, PNG, WEBP ফরম্যাটের ছবি গ্রহণযোগ্য</li>
                  <li>সর্বোচ্চ ছবির সাইজ ৫ MB</li>
                  <li>একজন ব্যক্তি দিনে সর্বোচ্চ একবারই অংশগ্রহণ করতে পারবেন</li>
                  <li>বিজয়ীকে মোবাইল নম্বরে যোগাযোগ করা হবে</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Prizes preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 rounded-3xl p-8 text-center"
          >
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">আকর্ষণীয় পুরস্কার</h3>
            <p className="text-gray-600 text-sm mb-4">
              ড্র-এ বিজয়ীরা আকর্ষণীয় পুরস্কার পাবেন। যত বেশি শেয়ার, তত বেশি সুযোগ!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['🥇 প্রথম পুরস্কার', '🥈 দ্বিতীয় পুরস্কার', '🥉 তৃতীয় পুরস্কার'].map((prize, i) => (
                <span key={i} className="bg-white border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                  {prize}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
