import { CourseDescriptionPipe } from './course-description.pipe';

describe('CourseDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new CourseDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
