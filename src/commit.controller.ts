import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { CommitsService } from './commits.service';

@Controller()
export class CommitController {
  constructor(private readonly commitService: CommitsService) {}

  @Get()
  async getCommits(@Res() res: Response) {
    const commits = await this.commitService.getCommits();

    return res.render('commits', {
      title: 'FullTimeForce Challenge Commits',
      commits,
    });
  }
}
