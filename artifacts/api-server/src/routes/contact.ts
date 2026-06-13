import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable, insertContactSubmissionSchema } from "@workspace/db";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = insertContactSubmissionSchema.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact form submission");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values(parsed.data)
    .returning();

  req.log.info({ id: submission.id, email: submission.email }, "Contact form submission saved");
  res.status(201).json({ success: true, id: submission.id });
});

export default router;
