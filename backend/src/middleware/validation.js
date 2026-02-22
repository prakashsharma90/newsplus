const { z } = require('zod');

const registerInterestSchema = z.object({
  interests: z.array(z.string()).min(1),
  followedKeywords: z.array(z.string()).optional().default([]),
});

function validate(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
    req.validated = parsed.data;
    return next();
  };
}

module.exports = { validate, registerInterestSchema };
