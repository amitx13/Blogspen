import { Navbar, Tabs, Tab, ScrollShadow } from "@nextui-org/react";

export const TabsList = () => {

  const Topic = [
    "All",
    "Technology",
    "Programming",
    "JavaScript",
    "Python",
    "Web Development",
    "Machine Learning",
    "Data Science",
    "DevOps",
    "Cloud Computing",
    "Cybersecurity",
    "Software Engineering",
    "Design",
    "Business",
    "Marketing",
    "Development",
    "Management",
    "Finance",
    "Productivity",
    "Personal Growth",
  ]

  return (
    <Navbar>
      <div className="mt-2 mb-2 overflow-y-hidden w-full flex flex-wrap gap-4 justify-center">
        <ScrollShadow className="w-3/4 rounded-full" orientation="horizontal" hideScrollBar={true} size={100} isEnabled={true}>
          <Tabs color={"success"} aria-label="Tabs colors" radius="full">
            {Topic.map((topic, index) => (
              <Tab key={index} title={topic} />
            ))}
          </Tabs>
        </ScrollShadow>
      </div>
    </Navbar>
  );
}