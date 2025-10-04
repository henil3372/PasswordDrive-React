import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    title: "Total accounts",
    value: "5",
    description:
      "Here you can see the number of all accounts that are available to you.",
  },
  {
    title: "Total categories",
    value: "12",
    description: "Here you can see the number of categories you are using.",
  },
  {
    title: "Shared accounts",
    value: "0",
    description: "Here you can see the number of accounts you have shared.",
  },
  {
    title: "Your accounts",
    value: "7/∞",
    description:
      "Here you can see the number of accounts you have created yourself.",
  },
];

const helpLinks = [{ label: "Video guides" }, { label: "Support" }];

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full">
      <header className="flex items-start gap-2.5 px-4 py-4 bg-bg-white border-b border-[#dadce0]">
        <h1 className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-type-grey-1 text-[22px] tracking-[0] leading-7">
          Overview
        </h1>
      </header>

      <div className="flex flex-col items-start gap-6 px-4 py-11">
        <Card className="w-full max-w-[1044px] bg-sea-blue rounded-xl overflow-hidden border-0">
          <CardContent className="relative p-0 h-[152px]">
            <div className="absolute top-0 right-0 w-[164px] h-[152px] bg-[url(/shield.png)] bg-[100%_100%]" />

            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-2 pb-4 border-b border-[#f0f1f7]">
                <div className="flex items-center gap-2">
                  <h2 className="font-desktop-primary-h1-400 font-[number:var(--desktop-primary-h1-400-font-weight)] text-bg-white text-[length:var(--desktop-primary-h1-400-font-size)] tracking-[var(--desktop-primary-h1-400-letter-spacing)] leading-[var(--desktop-primary-h1-400-line-height)] [font-style:var(--desktop-primary-h1-400-font-style)]">
                    Pro plan
                  </h2>
                </div>

                <p className="max-w-[1012px] font-desktop-secondary-b1-400 font-[number:var(--desktop-secondary-b1-400-font-weight)] text-bg-grey text-[length:var(--desktop-secondary-b1-400-font-size)] tracking-[var(--desktop-secondary-b1-400-letter-spacing)] leading-[var(--desktop-secondary-b1-400-line-height)] [font-style:var(--desktop-secondary-b1-400-font-style)]">
                  Everything you need to protect your passwords and collaborate.
                  Available on all your device.
                </p>
              </div>

              <div className="flex items-center gap-[108px] pb-4">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-bg-grey text-[13px] tracking-[0] leading-[13px]">
                  <span className="text-[#f0f1f7] leading-4">
                    Your plan expires on
                  </span>
                  <span className="font-[number:var(--desktop-secondary-b1-500-font-weight)] text-[#f0f1f7] leading-[var(--desktop-secondary-b1-500-line-height)] font-desktop-secondary-b1-500 [font-style:var(--desktop-secondary-b1-500-font-style)] tracking-[var(--desktop-secondary-b1-500-letter-spacing)] text-[length:var(--desktop-secondary-b1-500-font-size)]">
                    &nbsp;
                  </span>
                  <span className="font-[number:var(--desktop-secondary-b1-500-font-weight)] text-white leading-[var(--desktop-secondary-b1-500-line-height)] font-desktop-secondary-b1-500 [font-style:var(--desktop-secondary-b1-500-font-style)] tracking-[var(--desktop-secondary-b1-500-letter-spacing)] text-[length:var(--desktop-secondary-b1-500-font-size)]">
                    9 November 2024
                  </span>
                </p>

                <Button className="h-auto px-20 py-2 bg-bg-white rounded-lg hover:bg-bg-white/90">
                  <span className="w-[100px] font-desktop-primary-h2-500 font-[number:var(--desktop-primary-h2-500-font-weight)] text-sea-blue text-[length:var(--desktop-primary-h2-500-font-size)] text-center tracking-[var(--desktop-primary-h2-500-letter-spacing)] leading-[var(--desktop-primary-h2-500-line-height)] [font-style:var(--desktop-primary-h2-500-font-style)]">
                    View details
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap items-start gap-3 w-full">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex-[0_0_auto] bg-bg-white rounded-lg border-0"
            >
              <CardContent className="flex flex-col items-start gap-2.5 p-4">
                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-desktop-primary-h2-500 font-[number:var(--desktop-primary-h2-500-font-weight)] text-type-grey-1 text-[length:var(--desktop-primary-h2-500-font-size)] tracking-[var(--desktop-primary-h2-500-letter-spacing)] leading-[var(--desktop-primary-h2-500-line-height)] whitespace-nowrap [font-style:var(--desktop-primary-h2-500-font-style)]">
                      {stat.title}
                    </h3>

                    <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-type-grey-1 text-[40px] leading-7 tracking-[0] whitespace-nowrap">
                      {stat.value === "7/∞" ? (
                        <>
                          <span className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#3c4043] text-[40px] tracking-[0] leading-7">
                            7/
                          </span>
                          <span className="[font-family:'Roboto',Helvetica] font-medium">
                            ∞
                          </span>
                        </>
                      ) : (
                        stat.value
                      )}
                    </div>
                  </div>

                  <p className="w-[220px] font-desktop-secondary-b1-400 font-[number:var(--desktop-secondary-b1-400-font-weight)] text-type-grey-2 text-[length:var(--desktop-secondary-b1-400-font-size)] tracking-[var(--desktop-secondary-b1-400-letter-spacing)] leading-[var(--desktop-secondary-b1-400-line-height)] [font-style:var(--desktop-secondary-b1-400-font-style)]">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="flex flex-col items-center bg-bg-white rounded-lg border-0">
          <CardContent className="flex flex-col items-start p-0">
            <div className="flex flex-col items-start gap-5 p-4 border-b border-[#dadce0]">
              <h3 className="font-desktop-primary-h2-500 font-[number:var(--desktop-primary-h2-500-font-weight)] text-type-grey-1 text-[length:var(--desktop-primary-h2-500-font-size)] tracking-[var(--desktop-primary-h2-500-letter-spacing)] leading-[var(--desktop-primary-h2-500-line-height)] whitespace-nowrap [font-style:var(--desktop-primary-h2-500-font-style)]">
                Nedd Help?
              </h3>

              <p className="w-[484px] font-desktop-secondary-b1-400 font-[number:var(--desktop-secondary-b1-400-font-weight)] text-type-grey-2 text-[length:var(--desktop-secondary-b1-400-font-size)] tracking-[var(--desktop-secondary-b1-400-letter-spacing)] leading-[var(--desktop-secondary-b1-400-line-height)] [font-style:var(--desktop-secondary-b1-400-font-style)]">
                Take a look at our resources we&#39;ve highlighted below. They
                may be useful.
              </p>
            </div>

            <div className="flex items-start px-4">
              {helpLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto flex items-center justify-center gap-2 px-0 py-5 ${
                    index === 0 ? "border-r border-[#dadce0]" : ""
                  }`}
                >
                  <span className="w-[242px] font-desktop-secondary-b1-500 font-[number:var(--desktop-secondary-b1-500-font-weight)] text-sea-blue text-[length:var(--desktop-secondary-b1-500-font-size)] text-center tracking-[var(--desktop-secondary-b1-500-letter-spacing)] leading-[var(--desktop-secondary-b1-500-line-height)] [font-style:var(--desktop-secondary-b1-500-font-style)]">
                    {link.label}
                  </span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
