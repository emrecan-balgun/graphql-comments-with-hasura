CREATE TABLE "public"."comments" ("id" serial NOT NULL, "text" text NOT NULL, "post_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE restrict ON DELETE cascade);
