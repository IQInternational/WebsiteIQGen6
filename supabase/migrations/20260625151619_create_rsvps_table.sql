CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Public read: anyone can see the count of RSVPs
CREATE POLICY "read_rsvps" ON rsvps FOR SELECT
  TO anon, authenticated USING (true);

-- Public insert: anyone can RSVP (no auth required for this public invitation)
CREATE POLICY "insert_rsvps" ON rsvps FOR INSERT
  TO anon, authenticated WITH CHECK (true);
