
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqPage() {
  const faqs = [
    {
      question: "Can we visit the ranch?",
      answer: "We welcome visitors by appointment only to ensure we can provide you with a personal and safe tour of our facilities. Please contact us in advance to schedule your visit and we'll be happy to show you around."
    },
    {
      question: "What is the process for purchasing livestock?",
      answer: "The first step is to browse our available livestock on the website. Once you've found an animal you are interested in, please contact us directly via phone or email to discuss details, ask any questions, and arrange for viewing and purchase."
    },
    {
      question: "Are your animals grass-fed and pasture-raised?",
      answer: "Yes, animal welfare is our top priority. Our livestock are raised on open pastures with plenty of space to roam and graze. They are primarily grass-fed, and we supplement their diet with high-quality, locally sourced feed to ensure they are healthy and well-nourished."
    },
    {
      question: "Do you offer delivery services?",
      answer: "We can arrange for delivery within a certain radius of the ranch. Delivery fees vary based on distance and the number of animals. Please contact us for a quote and to discuss logistics."
    },
    {
      question: "How can I get in touch for specific inquiries?",
      answer: "For any specific questions that are not covered here, the best way to reach us is by using the contact form on our website or by calling us directly. We're always happy to help!"
    }
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find answers to common questions about Golden Ranch.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
