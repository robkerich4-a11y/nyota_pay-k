import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="gradient-primary text-primary-foreground pt-10 pb-32 text-center relative overflow-hidden">
      
      {/* Decorative circles */}
      <div className="absolute -top-1/2 -right-1/5 w-96 h-96 rounded-full bg-white/10" />
      <div className="absolute -bottom-1/3 -left-1/10 w-72 h-72 rounded-full bg-white/5" />

      {/* Full Width Banner */}
      <div className="w-full mb-12 relative z-10">
        <img
          src="/nyota.jpeg"
          alt="Nyota Pay - Mkopo Rahisi na Haraka"
          className="w-full h-auto object-cover shadow-2xl"
        />
      </div>

      {/* Hero Text */}
      <motion.div
        className="max-w-xl mx-auto px-5 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Instant M-Pesa Loans
        </h1>

        <p className="text-lg opacity-90 mb-8">
          Get funds directly to your M-Pesa in minutes. Simple, fast, and secure when you need it most.
        </p>

        <Button
          variant="hero"
          size="lg"
          onClick={() => navigate("/eligibility")}
        >
          Apply Now <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>

    </section>
  );
};

export default Hero;