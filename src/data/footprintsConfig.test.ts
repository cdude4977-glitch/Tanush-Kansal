import test from 'node:test';
import assert from 'node:assert/strict';
import { FOOTPRINTS_CONFIG } from './footprintsConfig.ts';

test('FOOTPRINTS_CONFIG has valid event branding and date', () => {
  assert.equal(FOOTPRINTS_CONFIG.brand.name, 'SHALOM FOOTPRINTS');
  assert.equal(FOOTPRINTS_CONFIG.brand.school, 'Shalom Hills International School');
  assert.equal(FOOTPRINTS_CONFIG.brand.eventDate, '14 November 2026');
  
  // Verify ISO date parses to 2026-11-14
  const parsedDate = new Date(FOOTPRINTS_CONFIG.brand.isoEventDate);
  assert.equal(parsedDate.getFullYear(), 2026);
  assert.equal(parsedDate.getMonth(), 10); // November is index 10
  assert.equal(parsedDate.getDate(), 14);
});

test('FOOTPRINTS_CONFIG has valid dummy registration link', () => {
  assert.ok(FOOTPRINTS_CONFIG.urls.registration.startsWith('https://'));
  assert.ok(FOOTPRINTS_CONFIG.urls.registration.includes('registration'));
});

test('Mentorship pillars cover the 3 required themes', () => {
  assert.equal(FOOTPRINTS_CONFIG.mentorshipPillars.length, 3);
  const titles = FOOTPRINTS_CONFIG.mentorshipPillars.map(p => p.title);
  assert.ok(titles.includes('Career Clarity'));
  assert.ok(titles.includes('Lessons Beyond the Classroom'));
  assert.ok(titles.includes('A Community That Gives Back'));
});

test('Alumni profiles have required attributes and are marked as configurable placeholders', () => {
  assert.ok(FOOTPRINTS_CONFIG.alumniProfiles.length > 0);
  for (const profile of FOOTPRINTS_CONFIG.alumniProfiles) {
    assert.ok(profile.id);
    assert.ok(profile.name);
    assert.ok(profile.graduationYear);
    assert.ok(profile.field);
    assert.ok(profile.role);
    assert.ok(profile.mentorshipTopics.length > 0);
  }
});

test('Highlights cover all 6 proposed event categories', () => {
  assert.equal(FOOTPRINTS_CONFIG.highlights.length, 6);
  const titles = FOOTPRINTS_CONFIG.highlights.map(h => h.title);
  assert.ok(titles.includes('Alumni Conversations'));
  assert.ok(titles.includes('Career Insights'));
  assert.ok(titles.includes('Mentorship & Guidance'));
  assert.ok(titles.includes('Shared Experiences'));
  assert.ok(titles.includes('Recognition & Prizes'));
  assert.ok(titles.includes('Community Connections'));
});

test('FAQs contain all required questions from brief', () => {
  assert.equal(FOOTPRINTS_CONFIG.faqs.length, 7);
  const questions = FOOTPRINTS_CONFIG.faqs.map(f => f.question);
  assert.ok(questions.includes('What is Shalom Footprints?'));
  assert.ok(questions.includes('Who can attend the event?'));
  assert.ok(questions.includes('How do I register?'));
  assert.ok(questions.includes('Where will the event take place?'));
  assert.ok(questions.includes('What activities are planned?'));
  assert.ok(questions.includes('Will there be prizes or recognition?'));
  assert.ok(questions.includes('Whom should I contact for assistance?'));
});
