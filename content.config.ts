import { defineContentConfig, defineCollection, z } from "@nuxt/content";
export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: "page",
            source: 'blog/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                image: z.object({
                    src: z.string(),
                }),
                auteurs: z.array(z.object(
                    {
                        name: z.string(),
                        to: z.string(),
                        avatar: z.object({
                            src: z.string(),
                        })
                    }
                )),
                date: z.string(),
                badge: z.object({
                    label: z.string(),
                })
            })
        }),
        seoData: defineCollection({
            type: 'data',
            source: 'blog/0.index.yml',
            schema: z.object({
                title: z.string(),
                ogTitle: z.string(),
                ogType: z.string(),
                ogImage: z.string(),
                twitterImage: z.string(),
                metaDescription: z.string(),
            })
        }),
        homepage: defineCollection({
            type: 'data',
            source: 'blog/1.home.yml',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                navigation: z.boolean(),
                hero: z.object({
                    title: z.string(),
                    description: z.string(),
                    image:z.string(),
                    links: z.array(
                        z.object({
                            label: z.string(),
                            icon: z.string(),
                            trailing: z.boolean(),
                            to: z.string(),
                            target: z.string(),
                            size: z.enum(["sm","md","lg","xl","2xs"]),
                            color: z.string().optional(),
                            variant: z.enum(["link","solid","outline"]),
                        })
                    )
                }),
                sections: z.array(
                    z.object({
                        title: z.string(),
                        description: z.string(),
                        id: z.string().optional(),
                        orientation: z.string(),
                        reverse: z.boolean().optional(),
                        features: z.array(
                            z.object({
                                name: z.string(),
                              
                                description: z.string(),
                                icon: z.string(),
                            })
                        )
                    })
                ),
                features: z.object({
                    title: z.string(),
                    description: z.string(),
                    items: z.array(
                        z.object({
                            title: z.string(),
                            description: z.string(),
                            icon: z.string(),
                        })
                    )
                }),
                cta: z.object({
                    title: z.string(),
                    description: z.string(),
                    links: z.array(
                        z.object({
                            label: z.string(),
                            to: z.string(),
                            target: z.string(),
                            icon: z.string().optional(),
                            trailingIcon: z.string().optional(),
                            variant: z.string().optional(),
                        })
                    )
                })
            })

        }),
        about: defineCollection({
            type: 'data',
            source: 'blog/about.yml',
            schema: z.object({
              title: z.string(),
              description: z.string(),
              sections: z.array(
                z.object({
                  title: z.string(),
                  id: z.string(),
                  items: z.array(
                    z.object({
                      title: z.string(),
                      period: z.string(),
                      description: z.string(),
                    })
                  ),
                })
              ),
              skills: z.array(
                z.object({
                  name: z.string(),
                  icon: z.string(),
                })
              ),
            }),
        })   
    }
});